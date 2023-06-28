<script setup>
import PreOrderButton from '@/components/PreOrderButton.vue'
</script>

<template>
  <section>
    <div class="py-20 4xl:flex 4xl:justify-center bg-theme-100">
      <div class="4xl:w-[2000px]">
        <div class="flex flex-col items-center justify-center">
          <div id="system" class="text-5xl font-bold">System</div>
          <div class="w-10 mt-5 border border-theme-400"></div>
        </div>

        <div class="flex flex-row items-center justify-center mt-36 gap-x-16">
          <div class="w-64">
            <div class="relative w-[300px]">
              <img
                src="@/assets/images/characters/dante/dante_cutout.webp"
                class="absolute -left-2 top-[-3.2rem]"
                alt="Dante"
              />
            </div>
            <div class="p-5 bg-theme-700 h-96">
              <div class="w-full h-full border"></div>
            </div>
            <div class="mt-8 text-base text-center">
              <span>Rack up enough "Stylish" ratings to get your hands on some Gold orbs.</span>
            </div>

            <div class="flex justify-center mt-8 text-base font-bold text-center">
              <a
                href="#"
                target="_blank"
                class="w-56 py-3 transition-all ease-in border hover:bg-theme-300 hover:tracking-widest"
              >
                <span>MORE</span>
              </a>
            </div>
          </div>
          <div class="w-64">
            <div class="relative w-[350px]">
              <img
                src="@/assets/images/characters/nero/nero_cutout.png"
                class="absolute -left-7 top-[-9.1rem]"
                alt="Nero"
              />
            </div>
            <div class="p-5 bg-theme-700 h-96">
              <div class="w-full h-full border"></div>
            </div>
            <div class="mt-8 text-base text-center">
              <span>Such a sight might very well be another player connected online!</span>
            </div>

            <div class="flex justify-center mt-8 text-base font-bold text-center">
              <a
                href="#"
                target="_blank"
                class="w-56 py-3 transition-all ease-in border hover:bg-theme-300 hover:tracking-widest"
              >
                <span>MORE</span>
              </a>
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
            <div class="p-5 bg-theme-700 h-96">
              <div class="w-full h-full border"></div>
            </div>
            <div class="mt-8 text-base text-center">
              <span>Some missions may even have you and other players fight side-by-side.</span>
            </div>

            <div class="flex justify-center mt-8 text-base font-bold text-center">
              <a
                href="#"
                target="_blank"
                class="w-56 py-3 transition-all ease-in border hover:bg-theme-300 hover:tracking-widest"
              >
                <span>MORE</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center py-7">
      <PreOrderButton />
    </div>
  </section>
</template>
