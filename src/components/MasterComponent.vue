<template>
  <HeaderComponent />
  <div class="">
    <slot />
  </div>
  <FooterComponent />
</template>

<script setup>
import HeaderComponent from './HeaderComponent.vue'
import FooterComponent from './FooterComponent.vue'
</script>
