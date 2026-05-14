<template>
  <div class="uk-container uk-margin-top uk-margin-bottom">
    <h1 class="uk-heading-medium uk-text-center uk-margin-large-bottom">歌词时间轴对齐编辑器</h1>
    
    <ClientOnly>
      <AudioPlayer ref="audioPlayerRef" />
      
      <LyricsPreview />
      
      <LyricsEditor v-model:audioPlayer="audioPlayerRef" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'

const audioPlayerRef = ref<ComponentPublicInstance<{
  getCurrentTime: () => number
}> | null>(null)
</script>
