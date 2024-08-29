<template>
  <div class="">
    <div class="relative flex items-center justify-between h-32 px-5">
      <div class="flex flex-col items-start md:flex-row md:items-center gap-x-2">
        <div class="flex items-center gap-1">
          <span class="block w-4 h-4 bg-blue-ff"></span>
          <h4 class="text-xl font-semibold md:text-2xl">Linh Giang</h4>
        </div>
        <span class="hidden md:inline-block">/</span>
        <h5 class="text-xl font-light">PHP Developer</h5>
      </div>
      <Transition name="slide-fade" mode="out-in">
        <ul
          class="fixed top-0 left-0 z-20 flex flex-col items-center justify-center w-full h-screen gap-3 bg-yellow-ce md:h-auto md:w-auto md:bg-opacity-0 md:flex-row md:static md:justify-end md:visible"
          :class="{ invisible: !isShowMenu }" v-if="isShowMenu">
          <router-link :to="{ name: 'about' }">
            <li><a href="#" class="c-link" :class="{ active: isActive('about') }">About me</a></li>
          </router-link>
          <router-link :to="{ name: 'resume' }">
            <li><a href="#" class="c-link" :class="{ active: isActive('resume') }">Resume</a></li>
          </router-link>
          <router-link :to="{ name: 'project' }">
            <li>
              <a href="#" class="c-link" :class="{ active: isActive('project') }">Projects</a>
            </li>
          </router-link>
          <router-link :to="{ name: 'contact' }">
            <li><a href="#" class="c-link" :class="{ active: isActive('contact') }">Contact</a></li>
          </router-link>
        </ul>
      </Transition>
      <div class="z-20 block w-8 h-8 cursor-pointer md:hidden" @click="menuStore.toggleMenu()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-full h-full" :class="[isShowMenu ? 'text-black' : 'text-blue-ff']">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMenu } from '@/stores/use-menu'
import { RouterLink, useRoute } from 'vue-router'
// import { computed } from 'vue';
const menuStore = useMenu()
// const isShowMenu = computed(() => menuStore.isShowMenu);
const isShowMenu = true;


const route = useRoute()

const isActive = (name) => route.name === name;
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
