<template>
  <div class="uk-card uk-card-default uk-card-body uk-margin-bottom">
    <h3 class="uk-card-title">音频播放器</h3>
    
    <ClientOnly>
      <div class="uk-margin">
        <input 
          ref="fileInput"
          type="file" 
          accept="audio/*"
          class="uk-hidden"
          @change="handleFileUpload"
        />
        <button 
          class="uk-button uk-button-primary uk-margin-small-right"
          @click="openFileInput"
        >
          <span uk-icon="upload"></span> 导入音频
        </button>
        <button 
          class="uk-button uk-button-secondary uk-margin-small-right"
          @click="loadDemoAudio"
        >
          <span uk-icon="play"></span> 加载示例音频
        </button>
        <audio 
          ref="audioRef"
          class="uk-margin-small-top"
          controls
          style="width: 100%"
          @timeupdate="handleTimeUpdate"
          @play="handlePlay"
          @pause="handlePause"
          @loadedmetadata="handleLoadedMetadata"
        >
          <source :src="safeState.audioUrl" />
          您的浏览器不支持音频播放
        </audio>
      </div>

      <div v-if="safeState.duration > 0" class="uk-margin-small">
        <div class="uk-text-muted">总时长: {{ formatTime(safeState.duration) }}</div>
      </div>

      <div class="uk-grid uk-grid-small uk-child-width-expand uk-text-center">
        <div>
          <div class="uk-text-muted">当前时间</div>
          <div class="uk-text-large uk-text-bold">{{ formatTime(safeState.currentTime) }}</div>
        </div>
        <div>
          <div class="uk-text-muted">播放状态</div>
          <div>
            <span :class="safeState.isPlaying ? 'uk-text-success' : 'uk-text-warning'">
              {{ safeState.isPlaying ? '播放中' : '已暂停' }}
            </span>
          </div>
        </div>
        <div>
          <div class="uk-text-muted">操作</div>
          <div>
            <button 
              class="uk-button uk-button-small uk-button-default uk-margin-small-right"
              @click="jumpBackward"
              title="后退5秒"
            >
              <span uk-icon="chevron-left"></span> -5s
            </button>
            <button 
              class="uk-button uk-button-small uk-button-default"
              @click="jumpForward"
              title="前进5秒"
            >
              +5s <span uk-icon="chevron-right"></span>
            </button>
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const { state, safeState, setAudioUrl, setCurrentTime, setDuration, setIsPlaying, formatTime } = useLyricsEditor()

const fileInput = ref<HTMLInputElement | null>(null)
const audioRef = ref<HTMLAudioElement | null>(null)

const DEMO_AUDIO_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    const url = URL.createObjectURL(file)
    setAudioUrl(url)
  }
}

const openFileInput = () => {
  fileInput.value?.click()
}

const loadDemoAudio = () => {
  setAudioUrl(DEMO_AUDIO_URL)
}

const handleTimeUpdate = () => {
  if (audioRef.value) {
    setCurrentTime(audioRef.value.currentTime)
  }
}

const handleLoadedMetadata = () => {
  if (audioRef.value) {
    setDuration(audioRef.value.duration)
  }
}

const handlePlay = () => {
  setIsPlaying(true)
}

const handlePause = () => {
  setIsPlaying(false)
}

const jumpBackward = () => {
  if (audioRef.value) {
    audioRef.value.currentTime = Math.max(0, audioRef.value.currentTime - 5)
  }
}

const jumpForward = () => {
  if (audioRef.value) {
    audioRef.value.currentTime = audioRef.value.currentTime + 5
  }
}

defineExpose({
  audioRef,
  getCurrentTime: () => audioRef.value?.currentTime || 0
})
</script>
