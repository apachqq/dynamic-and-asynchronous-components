<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot/>
  </button>
</template>

<script>
import AppButtonMixin from '@/mixins/AppButtonMixin'

export default {
  name: 'app-button',
  mixins: [AppButtonMixin]
}
</script>

<style scoped>
</style>
