<template>
  <div></div>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue';

export default {
  emits: ['keyup'],
  setup(props, { emit }) {
    let handler;
    
    onMounted(() => {
      handler = (event) => {
        emit('keyup', event);
      };
      window.addEventListener('keyup', handler);
    });
    
    onBeforeUnmount(() => {
      if (handler) {
        window.removeEventListener('keyup', handler);
      }
    });
    
    return {};
  }
}
</script>

<style scoped>
  div {
    display: none;
  }
</style>
