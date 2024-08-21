<template>
  <div class="w-screen p-3">
    <HeaderComponent />
    <div>
      <slot />
    </div>
    <FooterComponent />
  </div>
</template>

<script setup>
  import HeaderComponent from './HeaderComponent.vue'
  import FooterComponent from './FooterComponent.vue'
</script>