<script setup>
import NavView from '@/views/Nav/NavView.vue'
import ContactView from '@/views/Nav/ContactView.vue'
import PreOrderButton from '@/components/PreOrderButton.vue'
</script>

<template>
  <section>
    <div class="4xl:flex 4xl:justify-center bg-theme-100">
      <div class="relative 4xl:w-[2000px] flex flex-col h-full px-52">
        <div>
          <img
            src="@/assets/images/characters/dante/dante_home.webp"
            class="absolute hidden h-full pt-10 right-48 3xl:inline-block"
            alt="Dante"
          />
        </div>
        <NavView />
        <div class="flex flex-col items-start justify-center p-20 my-16 border">
          <div>
            <div class="3xl:mr-[48rem]">
              <div class="mt-16 text-6xl font-bold text-center text-theme-200 3xl:text-start">
                Devil May Cry
              </div>
              <div class="mt-12 text-xl text-center 3xl:text-start">
                The Devil May Cry Series boasts over 6.5 million sales of its copies as of January
                2023.
              </div>
              <div class="mt-5 text-xl text-center 3xl:text-start">
                The first game in this popular series to make its debut in the current generation,
                bringing stylist mayhem against fiendish foes at the hands of Devil Hunters with
                demon blood in their veins.
              </div>
              <div
                class="flex flex-row justify-center mt-8 text-base font-bold text-center gap-x-10 3xl:justify-start"
              >
                <a href="#">
                  <div
                    class="w-56 py-3 transition-all ease-in border cursor-pointer hover:bg-theme-300 hover:tracking-widest"
                  >
                    <span>PRE-ORDER</span>
                  </div></a
                >
                <a href="https://www.youtube.com/watch?v=gFj8qt9HiZg" target="_blank">
                  <div
                    class="w-56 py-3 transition-all ease-in border cursor-pointer hover:bg-theme-300 hover:tracking-widest"
                  >
                    <span>OFFICIAL TRAILER</span>
                  </div></a
                >
              </div>
            </div>
          </div>
        </div>
        <ContactView />
      </div>
    </div>

    <div class="flex items-center justify-center py-7">
      <PreOrderButton />
    </div>
  </section>
</template>
