<template>
  <div class="uk-card uk-card-default uk-card-body">
    <ClientOnly>
      <div class="uk-flex uk-flex-between uk-flex-middle uk-margin-bottom">
        <h3 class="uk-card-title uk-margin-remove">歌词编辑器</h3>
        <div>
          <button 
            class="uk-button uk-button-small uk-button-secondary uk-margin-small-right"
            @click="loadPreset(1)"
          >
            预设1
          </button>
          <button 
            class="uk-button uk-button-small uk-button-secondary uk-margin-small-right"
            @click="loadPreset(2)"
          >
            预设2
          </button>
          <button 
            class="uk-button uk-button-small uk-button-default uk-margin-small-right"
            @click="sortLyricsByTime"
          >
            按时间排序
          </button>
          <button 
            class="uk-button uk-button-small uk-button-danger"
            @click="clearAll"
          >
            清空
          </button>
        </div>
      </div>

      <div class="uk-margin-bottom">
        <button 
          class="uk-button uk-button-primary"
          @click="addLyricLine"
        >
          <span uk-icon="plus"></span> 添加歌词行
        </button>
      </div>
    </ClientOnly>

    <div class="uk-overflow-auto">
      <table class="uk-table uk-table-divider uk-table-middle uk-table-small">
        <thead>
          <tr>
            <th class="uk-width-small">#</th>
            <th class="uk-width-medium">时间</th>
            <th>歌词</th>
            <th class="uk-width-medium">微调</th>
            <th class="uk-width-small">操作</th>
          </tr>
        </thead>
        <tbody>
          <ClientOnly>
            <tr 
              v-for="(line, index) in safeLyrics" 
              :key="line.id"
              :class="{
                'uk-background-primary uk-light': getCurrentLyricLine?.id === line.id,
                'uk-background-muted': state.value.selectedLineId === line.id
              }"
              @click="setSelectedLineId(line.id)"
            >
            <td>{{ index + 1 }}</td>
            <td>
            <div class="uk-flex uk-flex-middle">
                <button 
                  class="uk-button uk-button-small uk-button-primary uk-margin-small-right"
                  @click.stop="markCurrentTime(line.id)"
                  title="标记当前播放时间"
                >
                  <span uk-icon="play"></span>
                </button>
              <input 
                type="text"
                class="uk-input uk-form-width-small"
                :value="formatTime(line.time)"
                @click.stop
                readonly
              />
            </div>
          </td>
            <td>
              <input 
                type="text"
                class="uk-input"
                :value="line.text"
                @input="updateLyricLine(line.id, ($event.target as HTMLInputElement).value)"
                @click.stop
                placeholder="输入歌词..."
              />
            </td>
            <td>
                <div class="uk-button-group">
                  <button 
                    class="uk-button uk-button-small uk-button-default"
                    @click.stop="adjustLyricTime(line.id, -0.1)"
                    :disabled="line.time === null"
                    title="-100ms"
                  >
                    -100ms
                  </button>
                  <button 
                    class="uk-button uk-button-small uk-button-default"
                    @click.stop="adjustLyricTime(line.id, -0.01)"
                    :disabled="line.time === null"
                    title="-10ms"
                  >
                    -10ms
                  </button>
                  <button 
                    class="uk-button uk-button-small uk-button-default"
                    @click.stop="adjustLyricTime(line.id, 0.01)"
                    :disabled="line.time === null"
                    title="+10ms"
                  >
                    +10ms
                  </button>
                  <button 
                    class="uk-button uk-button-small uk-button-default"
                    @click.stop="adjustLyricTime(line.id, 0.1)"
                    :disabled="line.time === null"
                    title="+100ms"
                  >
                    +100ms
                  </button>
                </div>
            </td>
            <td>
              <button 
                class="uk-button uk-button-small uk-button-danger"
                @click.stop="removeLyricLine(line.id)"
              >
                <span uk-icon="trash"></span>
              </button>
            </td>
          </tr>
          </ClientOnly>
          <tr v-if="!safeState.lyrics || safeState.lyrics.length === 0">
            <td colspan="5" class="uk-text-center uk-text-muted">
              暂无歌词，请点击上方按钮添加
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const audioPlayer = defineModel<{
  getCurrentTime: () => number
} | null>('audioPlayer', { default: null })

const {
  state,
  safeState,
  addLyricLine,
  removeLyricLine,
  updateLyricLine,
  setLyricTime,
  adjustLyricTime,
  setSelectedLineId,
  sortLyricsByTime,
  clearAll,
  loadPreset,
  formatTime,
  getCurrentLyricLine
} = useLyricsEditor()

const safeLyrics = computed(() => {
  return Array.isArray(state.value?.lyrics) ? state.value.lyrics : []
})

const markCurrentTime = (lineId: number) => {
  const currentTime = audioPlayer.value?.getCurrentTime() || 0
  setLyricTime(lineId, currentTime)
}
</script>
