<template>
  <div class="h-[70vh] lg:h-[80vh] relative">
    <div class="flex flex-col-reverse w-full h-full md:flex-row">
      <div class="w-[45%] bg-yellow-ce"></div>
      <div></div>
    </div>
    <div
      class="absolute z-10 flex flex-col items-center w-3/4 gap-10 p-5 mt-3 space-x-5 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg justify-evenly md:w-1/2 md:flex-row left-1/2 top-1/2">
      <div>
        <div class="w-32 h-32 mx-auto mb-3 md:h-60 md:w-60">
          <img src="/images/avatar.jpg" alt="Avatar" class="object-cover w-full h-full rounded-full">
        </div>
        <div class="">
          <h1 class="w-1/2 mx-auto mb-3 text-2xl font-semibold text-center md:text-3xl">Linh Giang</h1>
          <div class="w-1/4 h-1 mx-auto mb-3 bg-blue-ff"></div>
          <p class="hidden mb-3 text-center uppercase md:block">Php Developer</p>
          <div class="block mb-5 space-x-2 text-center md:hidden">
            <button type="button"
              class="px-5 py-1 text-white transition-all border rounded-full bg-blue-ff hover:bg-transparent hover:border-blue-ff hover:text-black">Resume</button>
            <button type="button"
              class="px-5 py-1 transition-all bg-transparent border border-black rounded-full hover:border-blue-ff hover:bg-blue-ff hover:text-white">Projects</button>
          </div>
        </div>
        <SocialComponent />
      </div>
      <div class="block w-none md:w-1/2">
        <h1 class="mb-5 text-3xl font-bold md:text-8xl">Hello</h1>
        <h3 class="mb-5 font-medium">I'm Linh Giang</h3>
        <div class="hidden mb-5 space-x-2 md:block">
          <a type="button" href="https://www.topcv.vn/xem-cv/VFQGVwYEV1UBWVEFAgMGCFEAUVIAW1pVUFdYUAc739" target="_blank"
            class="px-5 py-1 text-white transition-all border rounded-full bg-blue-ff hover:bg-transparent hover:border-blue-ff hover:text-black">Resume</a>
          <router-link :to="{ name: 'project' }">
            <button type="button"
              class="px-5 py-1 transition-all bg-transparent border border-black rounded-full hover:border-blue-ff hover:bg-blue-ff hover:text-white">Projects</button>
          </router-link>
        </div>
        <p class="text-sm font-light md:text-base">
          Experienced Fullstack Web Developer skilled in WordPress custom themes, Elementor, and various plugins.
          Proficient in JavaScript, VueJS, CSS, HTML, and PHP (including Laravel and CodeIgniter). Known for attention
          to detail and strong communication skills.
        </p>
        <br>
        <p class="text-sm font-light md:text-base">I look forward to joining your team to enhance my skills and
          contribute to complex web projects, optimizing the company's project performance
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
// import avatar from '@/assets/images/avatar.jpg';
import SocialComponent from '@/components/SocialComponent.vue';
</script>