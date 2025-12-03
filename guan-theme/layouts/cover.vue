<template>
  <div class="slidev-layout cover" :class="{ 'cover--no-graphic': !$slots.graphic }">
    <div class="cover-main my-auto w-full">
      <slot />
    </div>
    <div v-if="$slots.graphic" class="cover-graphic">
      <slot name="graphic" />
    </div>
  </div>
</template>
