<template>
  <div class="p-3">
    <HeaderComponent />
    <slot />
    <FooterComponent />
  </div>
</template>

<script setup>
  import HeaderComponent from './HeaderComponent.vue'
  import FooterComponent from './FooterComponent.vue'
</script>