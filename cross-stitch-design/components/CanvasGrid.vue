<script setup lang="ts">
import type { ThreadColor } from '~/composables/useThreadColors'

interface Cell {
  x: number
  y: number
  color: ThreadColor | null
}

const { threadColors, selectedColor } = useThreadColors()

const width = ref(20)
const height = ref(20)
const cells = ref<Cell[][]>([])

const isDrawing = ref(false)
const toolMode = ref<'paint' | 'fill'>('paint')

const initCanvas = () => {
  const newCells: Cell[][] = []
  for (let y = 0; y < height.value; y++) {
    const row: Cell[] = []
    for (let x = 0; x < width.value; x++) {
      row.push({ x, y, color: null })
    }
    newCells.push(row)
  }
  cells.value = newCells
}

onMounted(() => {
  initCanvas()
})

const paintCell = (x: number, y: number) => {
  if (cells.value[y] && cells.value[y][x]) {
    cells.value[y][x] = {
      ...cells.value[y][x],
      color: { ...selectedColor.value }
    }
  }
}

const clearCell = (x: number, y: number) => {
  if (cells.value[y] && cells.value[y][x]) {
    cells.value[y][x] = {
      ...cells.value[y][x],
      color: null
    }
  }
}

const fillArea = (startX: number, startY: number) => {
  const targetColor = cells.value[startY]?.[startX]?.color
  const fillColor = selectedColor.value

  if (targetColor?.id === fillColor.id) return

  const stack: [number, number][] = [[startX, startY]]
  const visited = new Set<string>()

  while (stack.length > 0) {
    const [x, y] = stack.pop()!
    const key = `${x},${y}`

    if (visited.has(key)) continue
    if (x < 0 || x >= width.value || y < 0 || y >= height.value) continue
    if (cells.value[y][x].color?.id !== targetColor?.id) continue

    visited.add(key)
    cells.value[y][x] = {
      ...cells.value[y][x],
      color: { ...fillColor }
    }

    stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1])
  }
}

const handleMouseDown = (x: number, y: number, event: MouseEvent) => {
  if (event.button === 2) {
    clearCell(x, y)
  } else if (toolMode.value === 'fill') {
    fillArea(x, y)
  } else {
    isDrawing.value = true
    paintCell(x, y)
  }
}

const handleMouseEnter = (x: number, y: number) => {
  if (isDrawing.value && toolMode.value === 'paint') {
    paintCell(x, y)
  }
}

const handleMouseUp = () => {
  isDrawing.value = false
}

const handleContextMenu = (event: MouseEvent) => {
  event.preventDefault()
}

defineExpose({
  cells,
  width,
  height,
  initCanvas,
  paintCell,
  clearCell
})
</script>

<template>
  <div class="box">
    <div class="is-flex is-justify-content-space-between is-align-items-center mb-4">
      <h3 class="title is-5 mb-0">画布 ({{ width }} x {{ height }})</h3>
      <div class="buttons has-addons">
        <button
          class="button is-small"
          :class="{ 'is-primary': toolMode === 'paint' }"
          @click="toolMode = 'paint'"
        >
          画笔
        </button>
        <button
          class="button is-small"
          :class="{ 'is-primary': toolMode === 'fill' }"
          @click="toolMode = 'fill'"
        >
          填充
        </button>
      </div>
    </div>
    <div class="canvas-container">
      <div
        v-if="cells.length > 0"
        class="canvas-grid"
        :style="{
          gridTemplateColumns: `repeat(${width}, 24px)`,
          gridTemplateRows: `repeat(${height}, 24px)`
        }"
        @mouseup="handleMouseUp"
        @mouseleave="handleMouseUp"
        @contextmenu="handleContextMenu"
      >
        <template v-for="row in cells" :key="`row-${row[0]?.y}`">
          <div
            v-for="cell in row"
            :key="`cell-${cell.x}-${cell.y}`"
            class="canvas-cell"
            :style="{
              backgroundColor: cell.color?.hex || '#FFFFFF'
            }"
            @mousedown="handleMouseDown(cell.x, cell.y, $event)"
            @mouseenter="handleMouseEnter(cell.x, cell.y)"
          />
        </template>
      </div>
      <div v-else class="has-text-centered py-6">
        <p>正在加载画布...</p>
      </div>
    </div>
    <p class="is-size-7 mt-3 has-text-grey">
      💡 左键绘制 | 右键擦除 | 拖拽可连续绘制
    </p>
  </div>
</template>
