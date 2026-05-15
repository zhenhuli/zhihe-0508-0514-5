import type { ThreadColor } from './useThreadColors'

export interface Cell {
  x: number
  y: number
  color: ThreadColor | null
}

export const useCanvas = () => {
  const width = useState<number>('canvas-width', () => 20)
  const height = useState<number>('canvas-height', () => 20)
  const cells = useState<Cell[][]>('canvas-cells', () => [])

  const { selectedColor } = useThreadColors()

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

  const resizeCanvas = (newWidth: number, newHeight: number) => {
    const oldCells = cells.value
    const newCells: Cell[][] = []

    for (let y = 0; y < newHeight; y++) {
      const row: Cell[] = []
      for (let x = 0; x < newWidth; x++) {
        if (oldCells[y] && oldCells[y][x]) {
          row.push(oldCells[y][x])
        } else {
          row.push({ x, y, color: null })
        }
      }
      newCells.push(row)
    }

    width.value = newWidth
    height.value = newHeight
    cells.value = newCells
  }

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

  const clearCanvas = () => {
    initCanvas()
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

  if (cells.value.length === 0) {
    initCanvas()
  }

  return {
    width,
    height,
    cells,
    initCanvas,
    resizeCanvas,
    paintCell,
    clearCell,
    clearCanvas,
    fillArea,
  }
}
