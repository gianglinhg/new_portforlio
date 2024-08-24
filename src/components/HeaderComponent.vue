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
      <Transition name="slide-fade" mode="out-in">
        <ul
          class="w-full h-screen fixed top-0 left-0 justify-center items-center flex flex-col gap-3 bg-yellow-ce md:h-auto md:w-auto md:bg-opacity-0 md:flex-row md:static md:justify-end md:visible"
          :class="{ 'invisible': !isShowMenu }" v-if="isShowMenu">
          <li><a href="#" class="c-link">About me</a></li>
          <li><a href="#" class="c-link">Resume</a></li>
          <li><a href="#" class="c-link">Projects</a></li>
          <li><a href="#" class="c-link">Contact</a></li>
        </ul>
      </Transition>
      <div class="cursor-pointer block md:hidden w-8 h-8 z-20" @click="isShowMenu = !isShowMenu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-full h-full" :class="[isShowMenu ? 'text-black' : 'text-blue-ff']">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const isShowMenu = ref(false);

onMounted(() => {
  window.addEventListener("resize", handleWindowSizeChange);
  handleWindowSizeChange();
});
onUnmounted(() => {
  window.removeEventListener("resize", handleWindowSizeChange);
});
const handleWindowSizeChange = () => {
  isShowMenu.value = true;
};
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