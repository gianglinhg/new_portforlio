<template>
  <div class="h-[70vh] lg:h-[80vh] relative">
    <div class="flex flex-col-reverse w-full h-full md:flex-row">
      <div class="w-[45%] bg-yellow-ce"></div>
      <div></div>
    </div>
    <div
      class="absolute z-10 flex flex-col items-center w-3/4 gap-10 px-10 py-10 mt-3 space-x-5 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg md:py-20 justify-evenly md:w-1/2 md:flex-row left-1/2 top-1/2">
      <div>
        <div class="w-32 h-32 mx-auto mb-3 md:h-60 md:w-60">
          <img src="/images/avatar.jpg" alt="Avatar" class="object-cover w-full h-full rounded-full" />
        </div>
        <div class="">
          <h1 class="w-1/2 mx-auto mb-3 text-2xl font-semibold text-center md:text-3xl">
            {{ info.name }}
          </h1>
          <div class="w-1/4 h-1 mx-auto mb-3 bg-blue-ff"></div>
          <p class="hidden mb-3 text-center uppercase md:block">{{ info.job }}</p>
          <div class="block mb-5 space-x-2 text-center md:hidden">
            <Button @click="openResume()" :name="'Resume'" />
            <button type="button"
              class="px-5 py-1 transition-all bg-transparent border border-black rounded-full hover:border-blue-ff hover:bg-blue-ff hover:text-white">
              Projects
            </button>
          </div>
        </div>
        <SocialComponent />
      </div>
      <div class="block w-none md:w-1/2">
        <h1 class="mb-5 text-3xl font-bold md:text-8xl">Hello</h1>
        <h3 class="mb-5 font-medium">I'm {{ info.name }}</h3>
        <div class="hidden mb-5 space-x-2 md:block">
          <Button @click="openResume()" :name="'Resume'" />
          <router-link :to="{ name: 'project' }">
            <button type="button"
              class="px-5 py-1 transition-all bg-transparent border border-black rounded-full hover:border-blue-ff hover:bg-blue-ff hover:text-white">
              Projects
            </button>
          </router-link>
        </div>
        <p class="text-sm font-light md:text-base">{{ info.summary }}</p>
        <br />
        <p class="text-sm font-light md:text-base">{{ info.target }}></p>
      </div>
    </div>
  </div>
</template>
<script setup>
import SocialComponent from '@/components/SocialComponent.vue'
import { onMounted, ref } from 'vue'
import Button from '@/components/ButtonComponent.vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const info = ref({})
const router = useRouter();

onMounted(() => {
  axios
    .get('../json/db.json')
    .then((res) => {
      info.value = res.data.infomation
    })
    .catch((error) => {
      console.error('Failed to fetch projects:', error)
    })
})
const openResume = () => router.push({ name: "resume" });
</script>
