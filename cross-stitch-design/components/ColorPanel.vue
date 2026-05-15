<script setup lang="ts">
import type { ThreadColor } from '~/composables/useThreadColors'

const { threadColors, selectedColor, selectColor } = useThreadColors()

const customColor = ref('#FF0000')
let customColorCounter = 0

const handleCustomColorChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  customColor.value = target.value
  
  customColorCounter++
  const customThreadColor: ThreadColor = {
    id: `custom-${customColorCounter}`,
    name: '自定义颜色',
    code: customColor.value.toUpperCase(),
    hex: customColor.value
  }
  selectColor(customThreadColor)
}
</script>

<template>
  <div class="box">
    <h3 class="title is-5 mb-4">配色面板</h3>
    
    <div class="field mb-4">
      <label class="label is-size-7">自定义取色器</label>
      <div class="is-flex is-align-items-center">
        <div class="control mr-3">
          <input
            type="color"
            v-model="customColor"
            @input="handleCustomColorChange"
            class="input is-small"
            style="width: 60px; height: 40px; padding: 2px; cursor: pointer;"
          />
        </div>
        <div class="is-flex-grow-1">
          <input
            type="text"
            v-model="customColor"
            @change="handleCustomColorChange"
            class="input is-small"
            placeholder="#FF0000"
            maxlength="7"
          />
        </div>
      </div>
      <p class="help is-size-7 mt-2">💡 点击颜色块选择任意颜色，或直接输入颜色代码</p>
    </div>

    <div class="columns is-multiline is-mobile">
      <div
        v-for="color in threadColors"
        :key="color.id"
        class="column is-2-mobile is-2-desktop"
      >
        <div
          class="color-swatch"
          :class="{ selected: selectedColor.id === color.id }"
          :style="{ backgroundColor: color.hex }"
          :title="`${color.name} (${color.code})`"
          @click="selectColor(color)"
        />
        <p class="is-size-7 mt-1 has-text-centered">{{ color.name }}</p>
      </div>
    </div>
    
    <div class="mt-4">
      <p class="is-size-7">当前选择:</p>
      <div class="is-flex is-align-items-center mt-2">
        <div
          class="color-swatch mr-2"
          :style="{ backgroundColor: selectedColor.hex }"
        />
        <div>
          <p class="is-size-6 has-text-weight-semibold">{{ selectedColor.name }}</p>
          <p class="is-size-7 has-text-grey">{{ selectedColor.code }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
