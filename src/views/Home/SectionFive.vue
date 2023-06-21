<script setup>
import PreOrderButton from '@/components/PreOrderButton.vue'
</script>

<template>
  <section>
    <div class="w-full 4xl:flex 4xl:justify-center bg-theme-100 py-20">
      <div class="4xl:w-[2000px]">
        <div class="flex flex-col justify-center items-center">
          <div id="system" class="font-bold text-5xl">System</div>
          <div class="border border-theme-400 mt-5 w-10"></div>
        </div>

        <div class="mt-36 flex flex-row gap-x-16 justify-center items-center">
          <div class="w-64">
            <div class="relative w-[300px]">
              <img
                src="@/assets/images/characters/dante/dante_cutout.png"
                class="absolute -left-2 top-[-3.2rem]"
                alt="Dante"
              />
            </div>
            <div class="bg-theme-700 w-full h-96 p-5">
              <div class="border w-full h-full">
                <div class="group-hover:bg-red-300 w-full h-full">

                </div>
              </div>
            </div>
            <div class="text-center mt-8 text-base">
              <span>Rack up enough "Stylish" ratings to get your hands on some Gold orbs.</span>
            </div>

            <div class="mt-8 flex justify-center text-center text-base font-bold">
              <a href="#" target="_blank"
                ><div
                  class="transition-all ease-in border py-3 w-56 cursor-pointer hover:bg-theme-300 hover:tracking-widest"
                >
                  <span>MORE</span>
                </div></a
              >
            </div>
          </div>
          <div class="w-64">
            <div class="relative w-[350px]">
              <img
                src="@/assets/images/characters/nero/nero_cutout_3.png"
                class="absolute -left-7 top-[-9.1rem]"
                alt="Nero"
              />
            </div>
            <div class="bg-theme-700 w-full h-96 p-5">
              <div class="border w-full h-full"></div>
            </div>
            <div class="text-center mt-8 text-base">
              <span>Such a sight might very well be another player connected online!</span>
            </div>

            <div class="mt-8 flex justify-center text-center text-base font-bold">
              <a href="#" target="_blank"
                ><div
                  class="transition-all ease-in border py-3 w-56 cursor-pointer hover:bg-theme-300 hover:tracking-widest"
                >
                  <span>MORE</span>
                </div></a
              >
            </div>
          </div>
          <div class="w-64">
            <div class="relative w-[275px]">
              <img
                src="@/assets/images/characters/v/v_cutout.png"
                class="absolute -left-2 top-[-3.1rem]"
                alt="V"
              />
            </div>
            <div class="bg-theme-700 w-full h-96 p-5">
              <div class="border w-full h-full"></div>
            </div>
            <div class="text-center mt-8 text-base">
              <span>Some missions may even have you and other players fight side-by-side.</span>
            </div>

            <div class="mt-8 flex justify-center text-center text-base font-bold">
              <a href="#" target="_blank"
                ><div
                  class="transition-all ease-in border py-3 w-56 cursor-pointer hover:bg-theme-300 hover:tracking-widest"
                >
                  <span>MORE</span>
                </div></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full py-7 z-20 flex justify-center items-center">
      <PreOrderButton />
    </div>
  </section>
</template>
