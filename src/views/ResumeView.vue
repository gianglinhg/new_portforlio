<template>
  <div class="w-full h-full p-10 bg-yellow-ce">
    <div class="w-1/2 mx-auto">
      <div class="my-5">
        <div class="flex items-center justify-center gap-1 mb-7">
          <span class="block w-4 h-4 bg-blue-ff"></span>
          <h4 class="text-2xl font-semibold md:text-3xl">Resume</h4>
        </div>
      </div>
      <div class="flex flex-col mb-20 space-y-10">
        <div class="flex justify-between">
          <h3 class="text-2xl font-semibold">Experience</h3>
          <Button @click="downloadCV()" :name="'Download CV'" />
        </div>
        <div class="flex flex-col gap-5 px-8 py-20 bg-white lg:flex-row" v-for="experience in experiences"
          :key="experience.id">
          <div class="flex-col leading-10 basis-5/12">
            <h4 class="text-xl font-semibold text-blue-ff">{{ experience.time }}</h4>
            <h4 class="font-light uppercase">{{ experience.role }}</h4>
            <p class="text-sm font-light">{{ experience.company_name }}</p>
            <p class="text-sm font-light"></p>
          </div>
          <div class="font-light basis-7/12">
            <ul class="max-w-md space-y-1 list-disc list-inside">
              <li v-for="item in experience.description" :key="item.id">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-col mb-20 space-y-10">
        <div class="flex justify-between">
          <h3 class="text-2xl font-semibold">Education</h3>
        </div>
        <div class="flex flex-col gap-5 px-8 py-20 bg-white lg:flex-row">
          <div class="leading-10 basis-5/12">
            <h4 class="text-2xl font-semibold text-blue-ff">{{ education.time }}</h4>
            <h4 class="font-light">{{ education.college }}</h4>
            <p class="text-sm font-light">{{ education.branch }}</p>
            <p class="text-sm font-light">{{ education.score }}</p>
          </div>
          <div class="font-light basis-7/12">
            {{ education.description }}
          </div>
        </div>
      </div>
      <div class="flex flex-col px-10 py-20 mb-5 space-y-20 bg-white">
        <div>
          <h4 class="mb-5 text-2xl font-semibold">Skills</h4>
          <div class="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div class="flex gap-1" v-for="main in skills.main" :key="main.id">
              <span class="block w-4 h-4 bg-blue-ff"></span>
              <h4 class="text-sm font-light">{{ main }}</h4>
            </div>
          </div>
        </div>
        <div>
          <h4 class="mb-5 text-2xl font-semibold">Soft skills</h4>
          <div class="grid grid-rows-1 gap-4">
            <div class="flex gap-1" v-for="short in skills.short" :key="short.id">
              <span class="block w-4 h-4 bg-blue-ff"></span>
              <h4 class="text-sm font-light">{{ short }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import Button from '@/components/ButtonComponent.vue'
import axios from 'axios'

const experiences = ref([])
const education = ref({})
const skills = ref({})
const cv_name = ref('')

onMounted(() => {
  axios
    .get('../json/db.json')
    .then((res) => {
      experiences.value = res.data.experiences
      education.value = res.data.education
      skills.value = res.data.skills
      cv_name.value = res.data.infomation.cv_name
    })
    .catch((error) => {
      console.error('Failed to fetch:', error)
    })
})

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/cv/' + cv_name.value
  link.download = cv_name.value
  link.click()
}
</script>
