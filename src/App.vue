<template>
  <MasterComponent>
    <router-view></router-view>
  </MasterComponent>
</template>

<script setup>
import { RouterView } from 'vue-router'
import MasterComponent from '@/components/MasterComponent.vue'
</script>
