export interface ThreadColor {
  id: string
  name: string
  code: string
  hex: string
}

const globalSelectedColor = ref<ThreadColor | null>(null)

export const useThreadColors = () => {
  const threadColors: ThreadColor[] = [
    { id: '1', name: 'White', code: 'DMC Blanc', hex: '#FFFFFF' },
    { id: '2', name: 'Black', code: 'DMC 310', hex: '#000000' },
    { id: '3', name: 'Red', code: 'DMC 666', hex: '#FF0000' },
    { id: '4', name: 'Dark Red', code: 'DMC 814', hex: '#8B0000' },
    { id: '5', name: 'Pink', code: 'DMC 604', hex: '#FFB6C1' },
    { id: '6', name: 'Dark Pink', code: 'DMC 899', hex: '#FF69B4' },
    { id: '7', name: 'Orange', code: 'DMC 741', hex: '#FFA500' },
    { id: '8', name: 'Dark Orange', code: 'DMC 970', hex: '#FF8C00' },
    { id: '9', name: 'Yellow', code: 'DMC 973', hex: '#FFFF00' },
    { id: '10', name: 'Gold', code: 'DMC 444', hex: '#FFD700' },
    { id: '11', name: 'Light Green', code: 'DMC 700', hex: '#90EE90' },
    { id: '12', name: 'Green', code: 'DMC 699', hex: '#00FF00' },
    { id: '13', name: 'Dark Green', code: 'DMC 909', hex: '#006400' },
    { id: '14', name: 'Light Blue', code: 'DMC 761', hex: '#ADD8E6' },
    { id: '15', name: 'Blue', code: 'DMC 798', hex: '#0000FF' },
    { id: '16', name: 'Dark Blue', code: 'DMC 823', hex: '#00008B' },
    { id: '17', name: 'Purple', code: 'DMC 550', hex: '#800080' },
    { id: '18', name: 'Light Purple', code: 'DMC 553', hex: '#DDA0DD' },
    { id: '19', name: 'Brown', code: 'DMC 938', hex: '#A52A2A' },
    { id: '20', name: 'Light Brown', code: 'DMC 977', hex: '#D2B48C' },
    { id: '21', name: 'Gray', code: 'DMC 415', hex: '#808080' },
    { id: '22', name: 'Light Gray', code: 'DMC 648', hex: '#D3D3D3' },
    { id: '23', name: 'Turquoise', code: 'DMC 3846', hex: '#40E0D0' },
    { id: '24', name: 'Cream', code: 'DMC 712', hex: '#FFFDD0' },
  ]

  if (globalSelectedColor.value === null) {
    globalSelectedColor.value = { ...threadColors[0] }
  }

  const selectColor = (color: ThreadColor) => {
    globalSelectedColor.value = { ...color }
  }

  return {
    threadColors,
    selectedColor: globalSelectedColor as Ref<ThreadColor>,
    selectColor,
  }
}
