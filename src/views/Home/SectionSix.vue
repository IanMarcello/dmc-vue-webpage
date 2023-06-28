<script setup>
import CibPlaystation from '~icons/cib/playstation'
import CibXbox from '~icons/cib/xbox'
import CibSteam from '~icons/cib/steam'
</script>

<template>
  <section>
    <div class="py-20 4xl:flex 4xl:justify-center bg-theme-100">
      <div class="4xl:w-[2000px]">
        <div class="flex flex-col items-center justify-center">
          <div id="products" class="text-5xl font-bold">Products</div>
          <div class="w-10 mt-5 border border-theme-400"></div>
        </div>

        <div class="py-24 mt-14 bg-theme-800">
          <div>
            <div class="mt-16 text-6xl font-bold text-center text-theme-200">
              Select product lineup
            </div>
            <div class="mt-12 text-xl text-center">Platform</div>
          </div>

          <div class="px-48 mt-14">
            <swiper-container
              :loop="true"
              :slides-per-view="1"
              :spaceBetween="10"
              :navigation="true"
              :keyboard="{
                enabled: true
              }"
            >
              <swiper-slide>
                <div class="flex items-center justify-center">
                  <div class="w-[50rem] h-48 flex justify-center items-center border border-white">
                    <div class="flex justify-between w-full gap-x-10 px-14">
                      <a href="#" target="_blank" class="flex items-center cursor-pointer group">
                        <CibPlaystation
                          class="transition-colors duration-200 w-7 h-7 group-hover:text-theme-500"
                        />
                        <span
                          class="ml-2 text-xl transition-colors duration-200 font-playstation_regular group-hover:bg-gradient-to-r group-hover:from-theme-500 group-hover:to-theme-600 group-hover:bg-clip-text group-hover:text-transparent"
                          >PS4</span
                        >
                      </a>
                      <a href="#" target="_blank" class="flex items-center cursor-pointer group">
                        <CibXbox
                          class="transition-colors duration-200 w-7 h-7 group-hover:text-theme-500"
                        />
                        <span
                          class="ml-2 text-xl transition-colors duration-200 font-xbox group-hover:bg-gradient-to-r group-hover:from-theme-500 group-hover:to-theme-600 group-hover:bg-clip-text group-hover:text-transparent"
                          >XBOX ONE</span
                        >
                      </a>
                      <a href="#" target="_blank" class="flex items-center cursor-pointer group">
                        <CibSteam
                          class="transition-colors duration-200 w-7 h-7 group-hover:text-theme-500"
                        />
                        <span
                          class="ml-2 text-xl font-bold tracking-wider transition-colors duration-200 font-steam group-hover:bg-gradient-to-r group-hover:from-theme-500 group-hover:to-theme-600 group-hover:bg-clip-text group-hover:text-transparent"
                          >STEAM</span
                        >
                      </a>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="flex items-center justify-center">
                  <div class="w-[50rem] h-48 flex justify-center items-center border border-white">
                    <div class="flex justify-between w-full h-fit gap-x-10 px-14">
                      <a href="#" target="_blank" class="flex items-center cursor-pointer group">
                        <CibPlaystation
                          class="transition-colors duration-200 w-7 h-7 group-hover:text-theme-500"
                        />
                        <span
                          class="ml-2 text-xl transition-colors duration-200 font-playstation_regular group-hover:bg-gradient-to-r group-hover:from-theme-500 group-hover:to-theme-600 group-hover:bg-clip-text group-hover:text-transparent"
                          >PS4</span
                        >
                      </a>
                      <a href="#" target="_blank" class="flex items-center cursor-pointer group">
                        <CibXbox
                          class="transition-colors duration-200 w-7 h-7 group-hover:text-theme-500"
                        />
                        <span
                          class="ml-2 text-xl transition-colors duration-200 font-xbox group-hover:bg-gradient-to-r group-hover:from-theme-500 group-hover:to-theme-600 group-hover:bg-clip-text group-hover:text-transparent"
                          >XBOX ONE</span
                        >
                      </a>
                      <a href="#" target="_blank" class="flex items-center cursor-pointer group">
                        <CibSteam
                          class="transition-colors duration-200 w-7 h-7 group-hover:text-theme-500"
                        />
                        <span
                          class="ml-2 text-xl font-bold tracking-wider transition-colors duration-200 font-steam group-hover:bg-gradient-to-r group-hover:from-theme-500 group-hover:to-theme-600 group-hover:bg-clip-text group-hover:text-transparent"
                          >STEAM</span
                        >
                      </a>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper-container>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
