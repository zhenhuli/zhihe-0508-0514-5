<template>
  <div class="uk-card uk-card-default uk-card-body uk-margin-bottom">
    <h3 class="uk-card-title">歌词预览</h3>
    
    <ClientOnly>
      <div class="uk-margin">
        <div 
          class="uk-background-muted uk-padding uk-border-rounded"
          style="min-height: 200px; display: flex; flex-direction: column; justify-content: center; align-items: center;"
        >
          <div v-if="getCurrentLyricLine" class="uk-text-center">
            <div class="uk-text-muted uk-margin-small-bottom">
              {{ formatTime(getCurrentLyricLine.time) }}
            </div>
            <div class="uk-text-large uk-text-bold uk-text-primary">
              {{ getCurrentLyricLine.text }}
            </div>
          </div>
          <div v-else class="uk-text-center uk-text-muted">
            <span uk-icon="icon: play-circle; ratio: 2" class="uk-margin-small-right"></span>
            播放音频并标记歌词时间后，将在此显示当前歌词
          </div>
        </div>
      </div>

      <div class="uk-margin">
        <h4 class="uk-heading-small">所有歌词时间轴</h4>
        <div class="uk-overflow-auto">
          <div 
            v-for="(line, index) in sortedLyrics" 
            :key="line.id"
            class="uk-flex uk-flex-middle uk-padding-small uk-border-rounded uk-margin-small-bottom"
            :class="{
              'uk-background-primary uk-light': getCurrentLyricLine?.id === line.id,
              'uk-background-muted': line.time === null
            }"
          >
            <div class="uk-width-small uk-text-bold">{{ index + 1 }}</div>
            <div class="uk-width-medium uk-mono">
              {{ formatTime(line.time) }}
            </div>
            <div class="uk-flex-1">
              {{ line.text || '(无歌词文本)' }}
            </div>
            <div v-if="line.time === null" class="uk-width-small uk-text-right uk-text-warning">
              未标记
            </div>
          </div>
          <div v-if="!safeState.lyrics || safeState.lyrics.length === 0" class="uk-text-center uk-text-muted uk-padding">
            暂无歌词数据
          </div>
        </div>
      </div>
    </ClientOnly>

    <div class="uk-margin">
      <h4 class="uk-heading-small">可视化时间轴</h4>
      <ClientOnly>
        <div class="uk-position-relative uk-background-muted uk-padding-small uk-border-rounded" style="height: 60px;">
          <div 
            class="uk-position-absolute uk-background-primary"
            style="width: 2px; height: 100%; top: 0; z-index: 10;"
            :style="{ left: `${progress}%` }"
          >
            <div class="uk-text-primary uk-text-small uk-text-center" style="position: absolute; bottom: -20px; left: -20px; width: 40px;">
              {{ formatTime(safeState.currentTime) }}
            </div>
          </div>
          <div 
            v-for="line in sortedLyricsWithTime" 
            :key="line.id"
            class="uk-position-absolute uk-background-secondary"
            style="width: 3px; height: 30px; top: 15px;"
            :style="{ left: `${(line.time! / maxTime) * 100}%` }"
            :title="`${line.text} - ${formatTime(line.time)}`"
          >
            <div 
              class="uk-text-tiny uk-text-center uk-text-nowrap"
              style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); max-width: 80px; overflow: hidden; text-overflow: ellipsis;"
            >
              {{ line.text }}
            </div>
          </div>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
const { state, safeState, formatTime, getCurrentLyricLine } = useLyricsEditor()

const sortedLyrics = computed(() => {
  const lyrics = Array.isArray(state.value?.lyrics) ? state.value.lyrics : []
  return [...lyrics].sort((a, b) => {
    if (a.time === null && b.time === null) return a.id - b.id
    if (a.time === null) return 1
    if (b.time === null) return -1
    return a.time - b.time
  })
})

const sortedLyricsWithTime = computed(() => {
  return sortedLyrics.value.filter(l => l.time !== null)
})

const maxTime = computed(() => {
  if (state.value?.duration > 0) return state.value.duration
  if (sortedLyricsWithTime.value.length === 0) return 30
  return Math.max(30, ...sortedLyricsWithTime.value.map(l => l.time!))
})

const progress = computed(() => {
  return ((state.value?.currentTime || 0) / maxTime.value) * 100
})
</script>
