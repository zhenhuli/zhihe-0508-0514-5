export interface LyricLine {
  id: number
  text: string
  time: number | null
}

export interface LyricsState {
  lyrics: LyricLine[]
  audioUrl: string | null
  currentTime: number
  duration: number
  isPlaying: boolean
  selectedLineId: number | null
}

const defaultState: LyricsState = {
  lyrics: [],
  audioUrl: null,
  currentTime: 0,
  duration: 0,
  isPlaying: false,
  selectedLineId: null
}

export const useLyricsEditor = () => {
  const state = useState<LyricsState>('lyrics-editor', () => ({ ...defaultState }))

  const safeState = computed(() => {
    if (!state.value) return { ...defaultState }
    return {
      lyrics: Array.isArray(state.value.lyrics) ? state.value.lyrics : [],
      audioUrl: state.value.audioUrl || null,
      currentTime: typeof state.value.currentTime === 'number' ? state.value.currentTime : 0,
      duration: typeof state.value.duration === 'number' ? state.value.duration : 0,
      isPlaying: typeof state.value.isPlaying === 'boolean' ? state.value.isPlaying : false,
      selectedLineId: state.value.selectedLineId || null
    }
  })

  if (!state.value) {
    state.value = { ...defaultState }
  }

  if (!state.value.lyrics || !Array.isArray(state.value.lyrics)) {
    state.value.lyrics = []
  }

  if (typeof state.value.currentTime !== 'number') {
    state.value.currentTime = 0
  }

  if (typeof state.value.duration !== 'number') {
    state.value.duration = 0
  }

  if (typeof state.value.isPlaying !== 'boolean') {
    state.value.isPlaying = false
  }

  const addLyricLine = (text: string = '') => {
    const lyrics = Array.isArray(state.value.lyrics) ? state.value.lyrics : []
    const newId = lyrics.length > 0 
      ? Math.max(...lyrics.map(l => l.id)) + 1 
      : 1
    lyrics.push({ id: newId, text, time: null })
    state.value.lyrics = lyrics
  }

  const removeLyricLine = (id: number) => {
    const lyrics = Array.isArray(state.value.lyrics) ? state.value.lyrics : []
    state.value.lyrics = lyrics.filter(l => l.id !== id)
  }

  const updateLyricLine = (id: number, text: string) => {
    const lyrics = Array.isArray(state.value.lyrics) ? state.value.lyrics : []
    const line = lyrics.find(l => l.id === id)
    if (line) line.text = text
  }

  const setLyricTime = (id: number, time: number) => {
    const lyrics = Array.isArray(state.value.lyrics) ? state.value.lyrics : []
    const line = lyrics.find(l => l.id === id)
    if (line) line.time = time
  }

  const adjustLyricTime = (id: number, offset: number) => {
    const lyrics = Array.isArray(state.value.lyrics) ? state.value.lyrics : []
    const line = lyrics.find(l => l.id === id)
    if (line && line.time !== null) line.time = Math.max(0, line.time + offset)
  }

  const setAudioUrl = (url: string) => { state.value.audioUrl = url }
  const setCurrentTime = (time: number) => { state.value.currentTime = time }
  const setDuration = (duration: number) => { state.value.duration = duration }
  const setIsPlaying = (playing: boolean) => { state.value.isPlaying = playing }
  const setSelectedLineId = (id: number | null) => { state.value.selectedLineId = id }

  const sortLyricsByTime = () => {
    const lyrics = Array.isArray(state.value.lyrics) ? [...state.value.lyrics] : []
    lyrics.sort((a, b) => {
      if (a.time === null && b.time === null) return a.id - b.id
      if (a.time === null) return 1
      if (b.time === null) return -1
      return a.time - b.time
    })
    state.value.lyrics = lyrics
  }

  const clearAll = () => { state.value = { ...defaultState } }

  const loadPreset = (preset: number) => {
    if (preset === 1) {
      state.value.lyrics = [
        { id: 1, text: '这是第一句歌词', time: 0.5 },
        { id: 2, text: '这是第二句歌词', time: 2.3 },
        { id: 3, text: '这是第三句歌词', time: 4.1 },
        { id: 4, text: '这是第四句歌词', time: 6.2 },
        { id: 5, text: '这是第五句歌词', time: 8.5 }
      ]
    } else if (preset === 2) {
      state.value.lyrics = [
        { id: 1, text: 'Twinkle twinkle little star', time: 0.0 },
        { id: 2, text: 'How I wonder what you are', time: 2.5 },
        { id: 3, text: 'Up above the world so high', time: 5.0 },
        { id: 4, text: 'Like a diamond in the sky', time: 7.5 },
        { id: 6, text: 'Twinkle twinkle little star', time: 10.0 },
        { id: 7, text: 'How I wonder what you are', time: 12.5 }
      ]
    }
  }

  const formatTime = (seconds: number | null): string => {
    if (seconds === null || seconds === undefined) return '--:--.---'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    const ms = Math.floor((seconds % 1) * 1000)
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`
  }

  const getCurrentLyricLine = computed(() => {
    const lyrics = Array.isArray(state.value.lyrics) ? state.value.lyrics : []
    const currentTime = state.value.currentTime || 0
    const sorted = [...lyrics].filter(l => l.time !== null).sort((a, b) => b.time! - a.time!)
    return sorted.find(l => l.time! <= currentTime) || null
  })

  return {
    state,
    safeState,
    addLyricLine,
    removeLyricLine,
    updateLyricLine,
    setLyricTime,
    adjustLyricTime,
    setAudioUrl,
    setCurrentTime,
    setDuration,
    setIsPlaying,
    setSelectedLineId,
    sortLyricsByTime,
    clearAll,
    loadPreset,
    formatTime,
    getCurrentLyricLine
  }
}

