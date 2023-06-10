<script setup>
import PreOrderButton from '@/components/PreOrderButton.vue'
</script>

<template>
  <section>
    <div class="w-full 4xl:flex 4xl:justify-center bg-[#16191f] py-20">
      <div class="4xl:w-[2000px]">
        <div class="flex flex-col justify-center items-center">
          <div id="system" class="font-bold text-5xl">System</div>
          <div class="border border-[#2d3035] mt-5 w-10"></div>
        </div>

        <div class="mt-10 flex flex-row gap-x-16 justify-center items-center">
          <div class="w-64">
            <div class="bg-[#111216] w-full h-96 p-5">
              <div class="border w-full h-full"></div>
            </div>
            <div class="text-center mt-8 text-base">
              <span>Rack up enough "Stylish" ratings to get your hands on some Gold orbs.</span>
            </div>

            <div class="mt-8 flex justify-center text-center text-base font-bold">
              <a href="#" target="_blank"
                ><div
                  class="transition-all ease-in border py-3 w-56 cursor-pointer hover:bg-[#282a34] hover:tracking-widest"
                >
                 <span>MORE</span>
                </div></a
              >
            </div>
          </div>
          <div class="w-64">
            <div class="bg-[#111216] w-full h-96 p-5">
              <div class="border w-full h-full"></div>
            </div>
            <div class="text-center mt-8 text-base">
              <span>Such a sight might very well be another player connected online!</span>
            </div>

            <div class="mt-8 flex justify-center text-center text-base font-bold">
              <a href="#" target="_blank"
                ><div
                  class="transition-all ease-in border py-3 w-56 cursor-pointer hover:bg-[#282a34] hover:tracking-widest"
                >
                 <span>MORE</span>
                </div></a
              >
            </div>
          </div>
          <div class="w-64">
            <div class="bg-[#111216] w-full h-96 p-5">
              <div class="border w-full h-full"></div>
            </div>
            <div class="text-center mt-8 text-base">
              <span>Some missions may even have you and other players fight side-by-side.</span>
            </div>

            <div class="mt-8 flex justify-center text-center text-base font-bold">
              <a href="#" target="_blank"
                ><div
                  class="transition-all ease-in border py-3 w-56 cursor-pointer hover:bg-[#282a34] hover:tracking-widest"
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
