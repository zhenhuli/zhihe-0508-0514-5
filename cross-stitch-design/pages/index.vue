<script setup lang="ts">
useHead({
  title: '十字绣像素图案设计器'
})

const canvasGridRef = ref()
const controlPanelRef = ref()

onMounted(() => {
  if (controlPanelRef.value && canvasGridRef.value) {
    controlPanelRef.value.canvasRef = canvasGridRef
  }
})
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="has-text-centered mb-5">
        <h1 class="title is-2">🧵 十字绣像素图案设计器</h1>
        <p class="subtitle is-5 has-text-grey">创建你的专属十字绣图案</p>
      </div>

      <ClientOnly>
        <div class="columns">
          <div class="column is-3">
            <ControlPanel ref="controlPanelRef" />
            <ColorPanel />
          </div>
          <div class="column is-9">
            <div class="is-flex is-justify-content-center">
              <CanvasGrid ref="canvasGridRef" />
            </div>
          </div>
        </div>
        <template #fallback>
          <div class="has-text-centered py-6">
            <p>加载中...</p>
          </div>
        </template>
      </ClientOnly>
    </div>
  </section>
</template>
