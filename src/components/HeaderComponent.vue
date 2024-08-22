<template>
  <div>
    <div class="h-32 px-5 flex justify-between items-center relative">
      <div class="flex flex-col md:flex-row items-start md:items-center gap-x-2">
        <div class="flex items-center gap-1">
          <span class="block w-4 h-4 bg-blue-ff"></span>
          <h4 class="text-xl md:text-2xl font-semibold">Giang Văn Linh</h4>
        </div>
        <span class="hidden md:inline-block">/</span>
        <h5 class="text-xl font-light">PHP Developer</h5>
      </div>
      <ul
        class="w-full h-screen fixed top-0 left-0 justify-center items-center flex flex-col gap-3 bg-yellow-ce md:h-auto md:w-auto md:bg-opacity-0 md:flex-row md:static md:justify-end md:visible"
        :class="{ 'invisible': !isShowMenu }">
        <li><a href="#" class="c-link">About me</a></li>
        <li><a href="#" class="c-link">Resume</a></li>
        <li><a href="#" class="c-link">Projects</a></li>
        <li><a href="#" class="c-link">Contact</a></li>
      </ul>
      <div class="block md:hidden w-8 h-8 z-20" @click="isShowMenu = !isShowMenu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-full h-full" :class="[isShowMenu ? 'text-black' : 'text-blue-ff']">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const isShowMenu = ref(false);
</script>