<script setup lang="ts">
import type { ThreadColor } from '~/composables/useThreadColors'

interface Cell {
  x: number
  y: number
  color: ThreadColor | null
}

interface CanvasRef {
  cells: Ref<Cell[][]>
  width: Ref<number>
  height: Ref<number>
  initCanvas: () => void
}

const canvasRef = ref<CanvasRef | null>(null)

const newWidth = ref(20)
const newHeight = ref(20)

const applyResize = () => {
  if (newWidth.value > 0 && newWidth.value <= 100 && newHeight.value > 0 && newHeight.value <= 100) {
    if (canvasRef.value) {
      const oldCells = canvasRef.value.cells.value
      const newCells: Cell[][] = []
      
      for (let y = 0; y < newHeight.value; y++) {
        const row: Cell[] = []
        for (let x = 0; x < newWidth.value; x++) {
          if (oldCells[y] && oldCells[y][x]) {
            row.push(oldCells[y][x])
          } else {
            row.push({ x, y, color: null })
          }
        }
        newCells.push(row)
      }
      
      canvasRef.value.cells.value = newCells
      canvasRef.value.width.value = newWidth.value
      canvasRef.value.height.value = newHeight.value
    }
  }
}

const clearCanvas = () => {
  if (canvasRef.value) {
    canvasRef.value.initCanvas()
  }
}

const exportImage = () => {
  if (!canvasRef.value) return
  
  const canvas = document.createElement('canvas')
  const cellSize = 20
  canvas.width = canvasRef.value.width.value * cellSize
  canvas.height = canvasRef.value.height.value * cellSize
  const ctx = canvas.getContext('2d')!

  ctx.fillStyle = '#FFFFFF'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  for (let y = 0; y < canvasRef.value.height.value; y++) {
    for (let x = 0; x < canvasRef.value.width.value; x++) {
      const cell = canvasRef.value.cells.value[y][x]
      if (cell.color) {
        ctx.fillStyle = cell.color.hex
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize)
      }
      ctx.strokeStyle = '#DDDDDD'
      ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize)
    }
  }

  const link = document.createElement('a')
  link.download = 'cross-stitch-design.png'
  link.href = canvas.toDataURL('image/png')
  link.click()
}

const getColorStatistics = () => {
  if (!canvasRef.value) return []
  
  const stats: Record<string, { color: ThreadColor, count: number }> = {}
  for (const row of canvasRef.value.cells.value) {
    for (const cell of row) {
      if (cell.color) {
        if (!stats[cell.color.id]) {
          stats[cell.color.id] = { color: cell.color, count: 0 }
        }
        stats[cell.color.id].count++
      }
    }
  }
  return Object.values(stats).sort((a, b) => b.count - a.count)
}

defineExpose({
  canvasRef
})
</script>

<template>
  <div class="box">
    <h3 class="title is-5 mb-4">控制面板</h3>

    <div class="field">
      <label class="label is-size-7">画布尺寸</label>
      <div class="columns is-mobile is-gap-1">
        <div class="column">
          <div class="field has-addons">
            <p class="control is-expanded">
              <input
                v-model.number="newWidth"
                type="number"
                class="input is-small"
                min="1"
                max="100"
                placeholder="宽度"
              />
            </p>
            <p class="control">
              <a class="button is-static is-small">宽</a>
            </p>
          </div>
        </div>
        <div class="column">
          <div class="field has-addons">
            <p class="control is-expanded">
              <input
                v-model.number="newHeight"
                type="number"
                class="input is-small"
                min="1"
                max="100"
                placeholder="高度"
              />
            </p>
            <p class="control">
              <a class="button is-static is-small">高</a>
            </p>
          </div>
        </div>
        <div class="column is-narrow">
          <button class="button is-primary is-small" @click="applyResize">
            应用
          </button>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label is-size-7">快速尺寸</label>
      <div class="buttons are-small">
        <button class="button" @click="newWidth = 10; newHeight = 10; applyResize()">10x10</button>
        <button class="button" @click="newWidth = 20; newHeight = 20; applyResize()">20x20</button>
        <button class="button" @click="newWidth = 30; newHeight = 30; applyResize()">30x30</button>
        <button class="button" @click="newWidth = 50; newHeight = 50; applyResize()">50x50</button>
      </div>
    </div>

    <div class="field is-grouped">
      <p class="control">
        <button class="button is-danger is-small is-outlined" @click="clearCanvas">
          清空画布
        </button>
      </p>
      <p class="control">
        <button class="button is-success is-small" @click="exportImage">
          导出图片
        </button>
      </p>
    </div>

    <div v-if="getColorStatistics().length > 0" class="mt-4">
      <p class="is-size-7 has-text-weight-semibold mb-2">颜色统计</p>
      <div class="tags">
        <span
          v-for="stat in getColorStatistics()"
          :key="stat.color.id"
          class="tag is-medium"
          :style="{ backgroundColor: stat.color.hex, color: '#000' }"
        >
          {{ stat.color.name }}: {{ stat.count }}
        </span>
      </div>
    </div>
  </div>
</template>
