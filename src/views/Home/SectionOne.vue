<script setup>
import NavView from '@/views/Nav/NavView.vue'
import ContactView from '@/views/Nav/ContactView.vue'
import PreOrderButton from '@/components/PreOrderButton.vue'
</script>

<template>
  <section>
    <div class="w-full 4xl:flex 4xl:justify-center bg-[#16191f]">
      <div class="relative 4xl:w-[2000px] flex flex-col h-full px-52">
        <div>
          <img
            src="@/assets/images/characters/dante/dante_home.png"
            class="pt-10 hidden 3xl:inline-block h-full absolute right-48"
            alt="Dante"
          />
        </div>
        <NavView />
        <div class="border w-full h-full flex p-20 flex-col justify-center items-start my-16">
          <div class="h-full w-full lg:w-1/2">
            <div class="mt-16 text-[#cd3232] font-bold text-6xl text-center 3xl:text-start">
              Devil May Cry
            </div>
            <div class="mt-12 text-xl text-center 3xl:text-start">
              The Devil May Cry Series boasts over 6.5 million sales
              <br class="hidden 3xl:inline-block" />
              of its copies as of January 2023.
            </div>
            <div class="mt-5 text-xl text-center 3xl:text-start">
              The first game in this popular series to make <br class="hidden 3xl:inline-block" />
              its debut in the current generation, bringing <br class="hidden 3xl:inline-block" />
              stylist mayhem against fiendish foes at the <br class="hidden 3xl:inline-block" />
              hands of Devil Hunters with demon blood in <br class="hidden 3xl:inline-block" />
              their veins.
            </div>
            <div
              class="mt-8 flex flex-row text-center gap-x-10 justify-center 3xl:justify-start text-base font-bold"
            >
              <a href="#">
                <div
                  class="transition-all ease-in border py-3 w-56 cursor-pointer hover:bg-[#282a34] hover:tracking-widest"
                >
                  <span>PRE-ORDER</span>
                </div></a
              >
              <a href="https://www.youtube.com/watch?v=gFj8qt9HiZg" target="_blank">
                <div
                  class="transition-all ease-in border py-3 w-56 cursor-pointer hover:bg-[#282a34] hover:tracking-widest"
                >
                  <span>OFFICIAL TRAILER</span>
                </div></a
              >
            </div>
          </div>
        </div>
        <ContactView />
      </div>
    </div>
    <div class="w-full py-7 z-20 flex justify-center items-center">
      <PreOrderButton />
    </div>
  </section>
</template>
