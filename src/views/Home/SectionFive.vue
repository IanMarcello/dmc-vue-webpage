<script setup>
import PreOrderButton from '@/components/PreOrderButton.vue'
</script>

<template>
  <section>
    <div class="py-20 4xl:flex 4xl:justify-center bg-theme-500">
      <div class="4xl:w-[2000px]">
        <div class="flex flex-col items-center justify-center">
          <div id="system" class="text-5xl font-bold">System</div>
          <div class="w-10 mt-5 border border-theme-300"></div>
        </div>

        <div class="flex flex-row items-center justify-center mt-36 gap-x-16">
          <div class="flex flex-col-reverse w-64">
            <div class="flex justify-center mt-8 text-base font-bold text-center peer group">
              <a
                href="#"
                target="_blank"
                class="w-56 py-3 transition-all ease-in border hover:bg-theme-400 hover:tracking-widest"
              >
                <span>MORE</span>
              </a>
            </div>

            <div class="mt-8 text-base text-center">
              <span>Rack up enough "Stylish" ratings to get your hands on some Gold orbs.</span>
            </div>

            <div class="p-5 transition-transform ease-in bg-theme-600 h-96 peer-hover:scale-110">
              <div
                class="w-full h-full border bg-gradient-radial from-slate-200 via-slate-300 to-slate-900"
              ></div>
            </div>

            <div class="relative w-[300px] transition-transform ease-in peer-hover:scale-105">
              <img
                src="@/assets/images/characters/dante/dante_cutout.webp"
                class="absolute -left-2 top-[-3.2rem]"
                alt="Dante"
              />
            </div>
          </div>

          <div class="flex flex-col-reverse w-64">
            <div class="flex justify-center mt-8 text-base font-bold text-center peer group">
              <a
                href="#"
                target="_blank"
                class="w-56 py-3 transition-all ease-in border hover:bg-theme-400 hover:tracking-widest"
              >
                <span>MORE</span>
              </a>
            </div>

            <div class="mt-8 text-base text-center">
              <span>Such a sight might very well be another player connected online!</span>
            </div>

            <div class="p-5 transition-transform ease-in bg-theme-600 h-96 peer-hover:scale-110">
              <div
                class="w-full h-full border bg-gradient-radial from-slate-200 via-slate-300 to-slate-900"
              ></div>
            </div>

            <div class="relative w-[350px] transition-transform ease-in peer-hover:scale-105">
              <img
                src="@/assets/images/characters/nero/nero_cutout.webp"
                class="absolute -left-7 top-[-9.1rem]"
                alt="Nero"
              />
            </div>
          </div>

          <div class="flex flex-col-reverse w-64">
            <div class="flex justify-center mt-8 text-base font-bold text-center peer group">
              <a
                href="#"
                target="_blank"
                class="w-56 py-3 transition-all ease-in border group-hover:bg-theme-400 group-hover:tracking-widest"
              >
                <span>MORE</span>
              </a>
            </div>

            <div class="mt-8 text-base text-center">
              <span>Some missions may even have you and other players fight side-by-side.</span>
            </div>

            <div class="p-5 transition-transform ease-in bg-theme-600 h-96 peer-hover:scale-110">
              <div
                class="w-full h-full transition-all duration-200 ease-in border bg-gradient-radial from-slate-200 via-slate-300 to-slate-900"
              ></div>
            </div>

            <div class="relative w-[275px] transition-transform ease-in peer-hover:scale-105">
              <img
                src="@/assets/images/characters/v/v_cutout.webp"
                class="absolute -left-2 top-[-3.1rem]"
                alt="V"
              />
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

<style>
.backgroundGradient {
  background: hsla(231, 6%, 76%, 1);

  background: radial-gradient(circle, hsla(231, 6%, 76%, 1) 54%, hsla(0, 0%, 3%, 1) 99%);

  background: -moz-radial-gradient(circle, hsla(231, 6%, 76%, 1) 54%, hsla(0, 0%, 3%, 1) 99%);

  background: -webkit-radial-gradient(circle, hsla(231, 6%, 76%, 1) 54%, hsla(0, 0%, 3%, 1) 99%);

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#BEBFC5", endColorstr="#080808", GradientType=1 );
}
</style>
