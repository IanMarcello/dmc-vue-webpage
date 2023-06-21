<script setup>
import CibPlaystation from '~icons/cib/playstation'
import CibXbox from '~icons/cib/xbox'
import CibSteam from '~icons/cib/steam'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Keyboard, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

const modules = [Navigation, Keyboard]
</script>

<template>
  <section>
    <div class="w-full 4xl:flex 4xl:justify-center bg-theme-100 py-20">
      <div class="4xl:w-[2000px]">
        <div class="flex flex-col justify-center items-center">
          <div id="products" class="font-bold text-5xl">Products</div>
          <div class="border border-theme-400 mt-5 w-10"></div>
        </div>

        <div class="mt-14 py-24 bg-theme-800">
          <div>
            <div class="mt-16 text-theme-200 font-bold text-6xl text-center">
              Select product lineup
            </div>
            <div class="mt-12 text-xl text-center">Platform</div>
          </div>

          <div class="mt-14 px-48">
            <swiper
              :loop="true"
              :slidesPerView="1"
              :spaceBetween="10"
              :navigation="true"
              :modules="modules"
              :keyboard="{
                enabled: true
              }"
              class="h-full"
            >
              <swiper-slide>
                <div class="w-full flex justify-center items-center">
                  <div class="w-[50rem] h-48 flex justify-center items-center border border-white">
                    <div class="flex justify-between w-full h-fit gap-x-10 px-14">
                      <div class="flex group items-center cursor-pointer">
                        <CibPlaystation
                          class="w-7 h-7 group-hover:text-theme-500 transition-colors ease-in-out duration-200"
                        />
                        <span
                          class="font-playstation_regular uppercase text-xl ml-2 group-hover:bg-gradient-to-r group-hover:from-theme-500 group-hover:to-theme-600 group-hover:bg-clip-text group-hover:text-transparent transition-colors ease-in-out duration-200"
                          >PS4</span
                        >
                      </div>
                      <div class="flex group items-center cursor-pointer">
                        <CibXbox
                          class="w-7 h-7 group-hover:text-theme-500 transition-colors ease-in-out duration-200"
                        />
                        <span
                          class="font-xbox uppercase text-xl ml-2 group-hover:bg-gradient-to-r group-hover:from-theme-500 group-hover:to-theme-600 group-hover:bg-clip-text group-hover:text-transparent transition-colors ease-in-out duration-200"
                          >XBOX ONE</span
                        >
                      </div>
                      <div class="flex group items-center cursor-pointer">
                        <CibSteam
                          class="w-7 h-7 group-hover:text-theme-500 transition-colors ease-in-out duration-200"
                        />
                        <span
                          class="font-steam font-bold tracking-wider uppercase text-xl ml-2 group-hover:bg-gradient-to-r group-hover:from-theme-500 group-hover:to-theme-600 group-hover:bg-clip-text group-hover:text-transparent transition-colors ease-in-out duration-200"
                          >STEAM</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="w-full flex justify-center items-center">
                  <div class="w-[50rem] h-48 flex justify-center items-center border border-white">
                    <div class="flex justify-between w-full h-fit gap-x-10 px-14">
                      <div class="flex group items-center cursor-pointer">
                        <CibPlaystation
                          class="w-7 h-7 group-hover:text-theme-500 transition-colors ease-in-out duration-200"
                        />
                        <span
                          class="font-playstation_regular uppercase text-xl ml-2 group-hover:bg-gradient-to-r group-hover:from-theme-500 group-hover:to-theme-600 group-hover:bg-clip-text group-hover:text-transparent transition-colors ease-in-out duration-200"
                          >PS4</span
                        >
                      </div>
                      <div class="flex group items-center cursor-pointer">
                        <CibXbox
                          class="w-7 h-7 group-hover:text-theme-500 transition-colors ease-in-out duration-200"
                        />
                        <span
                          class="font-xbox uppercase text-xl ml-2 group-hover:bg-gradient-to-r group-hover:from-theme-500 group-hover:to-theme-600 group-hover:bg-clip-text group-hover:text-transparent transition-colors ease-in-out duration-200"
                          >XBOX ONE</span
                        >
                      </div>
                      <div class="flex group items-center cursor-pointer">
                        <CibSteam
                          class="w-7 h-7 group-hover:text-theme-500 transition-colors ease-in-out duration-200"
                        />
                        <span
                          class="font-steam font-bold tracking-wider uppercase text-xl ml-2 group-hover:bg-gradient-to-r group-hover:from-theme-500 group-hover:to-theme-600 group-hover:bg-clip-text group-hover:text-transparent transition-colors ease-in-out duration-200"
                          >STEAM</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
