<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  src: string
  alt?: string
  caption?: string
  imgClass?: string
}

const props = defineProps<Props>()

const opened = ref(false)
const open = () => {
  opened.value = true
}
const close = () => {
  opened.value = false
}
</script>

<template>
  <figure class="zoom-image">
    <img
      :src="props.src"
      :alt="props.alt"
      :class="['zoom-image__thumb', props.imgClass]"
      role="button"
      tabindex="0"
      @click="open"
      @keydown.enter.prevent="open"
    />
    <figcaption v-if="props.caption" class="zoom-image__caption">
      {{ props.caption }}
    </figcaption>
  </figure>
  <Teleport to="body">
    <Transition name="zoom-image-fade">
      <div v-if="opened" class="zoom-overlay" @click.self="close">
        <button class="zoom-overlay__close" type="button" aria-label="关闭" @click="close">×</button>
        <img :src="props.src" :alt="props.alt" class="zoom-overlay__img" />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.zoom-image {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.zoom-image__thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: zoom-in;
  border-radius: 1rem;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.zoom-image__thumb:hover {
  transform: translateY(-4px);
  box-shadow: 0 28px 60px rgba(15, 23, 42, 0.25);
}

.zoom-image__caption {
  font-size: 0.9rem;
  color: #6b7280;
}

.zoom-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 1000;
}

.zoom-overlay__img {
  max-width: min(1200px, 90vw);
  max-height: 90vh;
  object-fit: contain;
  border-radius: 1rem;
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.5);
}

.zoom-overlay__close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 2rem;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  line-height: 1;
}

.zoom-image-fade-enter-active,
.zoom-image-fade-leave-active {
  transition: opacity 0.2s ease;
}

.zoom-image-fade-enter-from,
.zoom-image-fade-leave-to {
  opacity: 0;
}
</style>
