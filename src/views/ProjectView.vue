<template>
  <div class="w-full h-full p-10 bg-yellow-ce">
    <div class="w-2/3 mx-auto lg:w-1/3">
      <div class="my-5">
        <div class="flex items-center justify-center gap-1 mb-7">
          <span class="block w-4 h-4 bg-blue-ff"></span>
          <h4 class="text-2xl font-semibold md:text-3xl">Projects</h4>
        </div>
        <p class="font-light text-center">These are the projects I am working on and have worked on as a developer.</p>
      </div>
      <div class="flex flex-col gap-y-20">
        <div class="flex flex-col items-center bg-white lg:flex-row" v-for="project in projects" :key="project.id">
          <div class="p-5 basis-7/12">
            <div class="flex items-center h-10 gap-3 mb-7">
              <span class="block w-2 h-full -ml-5 bg-blue-ff"></span>
              <div>
                <h3 class="text-2xl font-semibold text-blue-ff">
                  <a :href="project.href" target="_blank">
                    {{ project.name }}
                  </a>
                </h3>
                <p class="font-medium">{{ project.role }}</p>
              </div>
            </div>
            
            <p class="text-sm font-light">{{ project.description }}</p>
          </div>
          <div class="w-full h-full basis-5/12">
            <img :src="'../../public/' + project.image" class="object-cover w-full h-full" :alt="project.image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'
  const projects = ref([]);
  onMounted(() => {
  axios.get('../db.json')
    .then((res) => {
      projects.value = res.data.projects;
    })
    .catch((error) => {
      console.error("Failed to fetch projects:", error);
    });
});
</script>