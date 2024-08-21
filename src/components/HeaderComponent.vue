<template>
  <div>
    <header class="h-32 px-5 flex justify-between items-center relative">
      <div class="flex flex-col md:flex-row items-start md:items-center gap-x-2">
        <div class="flex items-center gap-1">  
          <span class="block w-4 h-4 bg-blue-ff"></span>
          <h4 class="text-xl md:text-2xl font-semibold">Giang Văn Linh</h4>
        </div>
        <span class="hidden md:inline-block">/</span>
        <h5 class="text-xl font-light">PHP Developer</h5>
      </div>
      <ul class="invisible w-full h-screen fixed top-0 left-0 justify-center items-center flex flex-col gap-3 bg-yellow-ce md:h-auto md:w-auto md:bg-opacity-0 md:flex-row md:static md:justify-end md:visible">
        <li><a href="#" class="uppercase font-light hover:text-blue-ff transition ease-in">About me</a></li>
        <li><a href="#" class="uppercase font-light hover:text-blue-ff transition ease-in">Resume</a></li>
        <li><a href="#" class="uppercase font-light hover:text-blue-ff transition ease-in">Projects</a></li>
        <li><a href="#" class="uppercase font-light hover:text-blue-ff transition ease-in">Contact</a></li>
      </ul>
    </header>
  </div>
</template>