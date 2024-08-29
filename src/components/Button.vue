<template>
  <button type="button"
    class="px-5 py-1 text-white transition-all border-2 rounded-full bg-blue-ff hover:bg-transparent hover:border-blue-ff hover:text-black">
    {{ name }}
  </button>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  name: {
    require: true,
  }
});
</script>