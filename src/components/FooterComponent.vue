<template>
  <div>
    <div class="flex items-center justify-between h-32 px-5 text-sm font-light bg-white">
      <div class="basis-2/6">
        <p class="">&copy; 2024 by Giang Linh</p>
      </div>
      <div class="flex justify-center basis-4/6 gap-x-10">
        <div class="leading-7">
          <h5 class="font-medium text-center">Call</h5>
          <p>0337 229 661</p>
        </div>
        <div class="leading-7">
          <h5 class="font-medium text-center">Write</h5>
          <p>linhbq89@gmail.com</p>
        </div>
        <div class="leading-7">
          <h5 class="font-medium text-center">Follow</h5>
          <SocialComponent/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import SocialComponent from './SocialComponent.vue';
</script>