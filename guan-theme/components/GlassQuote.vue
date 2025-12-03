<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    align?: 'left' | 'center' | 'right'
    maxWidth?: string
    fullWidth?: boolean
    inset?: boolean
  }>(),
  {
    align: 'center',
    maxWidth: '960px',
    fullWidth: false,
    inset: false,
  },
)
</script>

<template>
  <div
    class="glass-quote"
    :class="[
      `glass-quote--${props.align}`,
      props.fullWidth ? 'glass-quote--full' : 'glass-quote--inline',
    ]"
    :style="{ maxWidth: props.fullWidth ? undefined : props.maxWidth }"
  >
    <slot />
  </div>
</template>

<style scoped>
.glass-quote {
  border-radius: 36px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(233, 239, 255, 0.65));
  box-shadow:
    0 25px 80px rgba(15, 23, 42, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 700;
  color: #0f172a;
  line-height: 1.25;
  text-align: center;
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  letter-spacing: 0.01em;
  margin-left: auto;
  margin-right: auto;
}

.glass-quote--inline {
  width: fit-content;
}

.glass-quote--full {
  width: 100%;
}

.glass-quote--left {
  text-align: left;
}

.glass-quote--right {
  text-align: right;
}
</style>
