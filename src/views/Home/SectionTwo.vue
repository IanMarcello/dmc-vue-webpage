<script setup>
import CibPlaystation from '~icons/cib/playstation'
import CibXbox from '~icons/cib/xbox'
import CibSteam from '~icons/cib/steam'
import IcOutlineAccessTime from '~icons/ic/outline-access-time'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Keyboard, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

const modules = [Navigation, Keyboard]
</script>

<template>
  <section>
    <div class="w-full 4xl:flex 4xl:justify-center bg-[#16191f] py-14">
      <div class="4xl:w-[2000px]">
        <div class="flex flex-col justify-center items-center">
          <div id="media" class="font-bold text-5xl">Media</div>
          <div class="border border-[#2d3035] mt-5 w-10"></div>
        </div>

        <div class="mt-14 flex flex-col gap-y-10 3xl:flex-row justify-between px-48">
          <div>
            <div class="flex justify-center">
              <div class="w-[600px]">
                <img src="@/assets/images/media/dmc_demo.jpg" alt="Devil May Cry 5 Demo" />
              </div>
            </div>

            <div class="flex flex-col justify-center items-center mt-5">
              <div class="font-bold text-xl">The Devil May Cry 5 Demo is Live!</div>
              <div class="border border-[#2d3035] mt-5 w-10"></div>
            </div>

            <div class="flex justify-center gap-x-10 mt-5">
              <div class="flex group items-center cursor-pointer">
                <CibPlaystation
                  class="w-7 h-7 group-hover:text-[#449ca2] transition-colors ease-in-out duration-200"
                />
                <span
                  class="font-playstation_regular uppercase text-xl ml-2 group-hover:bg-gradient-to-r group-hover:from-[#449ca2] group-hover:to-[#e63f33] group-hover:bg-clip-text group-hover:text-transparent transition-colors ease-in-out duration-200"
                  >PS4</span
                >
              </div>
              <div class="flex group items-center cursor-pointer">
                <CibXbox
                  class="w-7 h-7 group-hover:text-[#449ca2] transition-colors ease-in-out duration-200"
                />
                <span
                  class="font-xbox uppercase text-xl ml-2 group-hover:bg-gradient-to-r group-hover:from-[#449ca2] group-hover:to-[#e63f33] group-hover:bg-clip-text group-hover:text-transparent transition-colors ease-in-out duration-200"
                  >XBOX ONE</span
                >
              </div>
            </div>
          </div>
          <div>
            <div class="flex justify-center">
              <div class="w-[600px]">
                <img
                  src="@/assets/images/media/dmc_collector.jpg"
                  alt="Devil May Cry 5 Collector's Edition"
                />
              </div>
            </div>

            <div class="flex flex-col justify-center items-center mt-5">
              <div class="font-bold text-xl">The Devil May Cry 5 Collector's Edition</div>
              <div class="border border-[#2d3035] mt-5 w-10"></div>
            </div>

            <div class="flex justify-center gap-x-10 mt-5">
              <div class="flex group items-center cursor-pointer">
                <CibPlaystation
                  class="w-7 h-7 group-hover:text-[#449ca2] transition-colors ease-in-out duration-200"
                />
                <span
                  class="font-playstation_regular uppercase text-xl ml-2 group-hover:bg-gradient-to-r group-hover:from-[#449ca2] group-hover:to-[#e63f33] group-hover:bg-clip-text group-hover:text-transparent transition-colors ease-in-out duration-200"
                  >PS4</span
                >
              </div>
              <div class="flex group items-center cursor-pointer">
                <CibXbox
                  class="w-7 h-7 group-hover:text-[#449ca2] transition-colors ease-in-out duration-200"
                />
                <span
                  class="font-xbox uppercase text-xl ml-2 group-hover:bg-gradient-to-r group-hover:from-[#449ca2] group-hover:to-[#e63f33] group-hover:bg-clip-text group-hover:text-transparent transition-colors ease-in-out duration-200"
                  >XBOX ONE</span
                >
              </div>
              <div class="flex group items-center cursor-pointer">
                <CibSteam
                  class="w-7 h-7 group-hover:text-[#449ca2] transition-colors ease-in-out duration-200"
                />
                <span
                  class="font-steam font-bold tracking-wider uppercase text-xl ml-2 group-hover:bg-gradient-to-r group-hover:from-[#449ca2] group-hover:to-[#e63f33] group-hover:bg-clip-text group-hover:text-transparent transition-colors ease-in-out duration-200"
                  >STEAM</span
                >
              </div>
            </div>
          </div>
        </div>

        <div class="mt-14 px-48">
          <swiper
            :loop="true"
            :slidesPerView="3"
            :spaceBetween="10"
            :navigation="true"
            :modules="modules"
            :keyboard="{
              enabled: true
            }"
            class="h-full"
          >
            <swiper-slide>
              <div class="flex justify-center items-center h-fit">
                <div class="w-[24rem]">
                  <div class="group h-[24rem] relative overflow-hidden">
                    <a
                      href="https://www.youtube.com/watch?v=MWxlbnI9mpU&list=PLc_IbVLk1pmgYBtngbQt2YTbbU39fUNm9&index=5&pp=iAQB"
                      target="_blank"
                      ><img
                        class="absolute transition-all group-hover:scale-125 object-cover h-full"
                        src="@/assets/images/media/nero.jpg"
                        alt="Nero"
                      />
                      <div
                        class="absolute w-full text-white text-lg py-5 font-semibold group-hover:tracking-wider text-center bottom-0 bg-black bg-opacity-50"
                      >
                        Final Trailer
                      </div></a
                    >
                  </div>
                  <div class="w-full flex justify-center py-6">
                    <IcOutlineAccessTime />
                    <span class="ml-2">02:50</span>
                  </div>
                  <div class="border border-[#2d3035] w-full"></div>
                  <div class="w-full text-center mt-6">
                    <span>
                      The Devil May Cry Series boasts over <br class="hidden 3xl:inline-block" />
                      6.5 million sales worldwide.
                    </span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center items-center h-fit">
                <div class="w-[24rem]">
                  <div class="group h-[24rem] relative overflow-hidden">
                    <a
                      href="https://www.youtube.com/watch?v=kBbb-XXRIwM&list=PLc_IbVLk1pmgYBtngbQt2YTbbU39fUNm9&index=6&pp=iAQB"
                      target="_blank"
                    >
                      <img
                        class="absolute object-cover h-full transition-all group-hover:scale-125"
                        src="@/assets/images/media/nero_closeup.jpg"
                        alt="Nero Close-Up"
                      />
                      <div
                        class="absolute w-full text-white py-5 font-semibold group-hover:tracking-wider text-center bottom-0 bg-black bg-opacity-50"
                      >
                        Nero Combat Video
                      </div></a
                    >
                  </div>
                  <div class="w-full flex justify-center py-6">
                    <IcOutlineAccessTime />
                    <span class="ml-2">00:48</span>
                  </div>
                  <div class="border border-[#2d3035] w-full"></div>
                  <div class="w-full text-center mt-6">
                    <span>
                      The Devil May Cry Series boasts over <br class="hidden 3xl:inline-block" />
                      6.5 million sales worldwide.
                    </span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center items-center h-fit">
                <div class="w-[24rem]">
                  <div class="group h-[24rem] relative overflow-hidden">
                    <a
                      href="https://www.youtube.com/watch?v=pXdP2VDv9lo&list=PLc_IbVLk1pmgYBtngbQt2YTbbU39fUNm9&index=7&pp=iAQB"
                      target="_blank"
                    >
                      <img
                        class="absolute object-cover h-full transition-all group-hover:scale-125"
                        src="@/assets/images/media/dante_closeup.png"
                        alt="Dante Close-Up"
                      />
                      <div
                        class="absolute w-full text-white py-5 font-semibold group-hover:tracking-wider text-center bottom-0 bg-black bg-opacity-50"
                      >
                        Dante Combat Video
                      </div></a
                    >
                  </div>
                  <div class="w-full flex justify-center py-6">
                    <IcOutlineAccessTime />
                    <span class="ml-2">00:48</span>
                  </div>
                  <div class="border border-[#2d3035] w-full"></div>
                  <div class="w-full text-center mt-6">
                    <span>
                      The Devil May Cry Series boasts over <br class="hidden 3xl:inline-block" />
                      6.5 million sales worldwide.
                    </span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center items-center h-fit">
                <div class="w-[24rem]">
                  <div class="group h-[24rem] relative overflow-hidden">
                    <a
                      href="https://www.youtube.com/watch?v=8tmhE2qhTSc&list=PLc_IbVLk1pmgYBtngbQt2YTbbU39fUNm9&index=8&pp=iAQB"
                      target="_blank"
                    >
                      <img
                        class="absolute object-cover h-full transition-all group-hover:scale-125"
                        src="@/assets/images/media/v_closeup.png"
                        alt="V Close-Up"
                      />
                      <div
                        class="absolute w-full text-white py-5 font-semibold group-hover:tracking-wider text-center bottom-0 bg-black bg-opacity-50"
                      >
                        V Combat Video
                      </div></a
                    >
                  </div>
                  <div class="w-full flex justify-center py-6">
                    <IcOutlineAccessTime />
                    <span class="ml-2">00:50</span>
                  </div>
                  <div class="border border-[#2d3035] w-full"></div>
                  <div class="w-full text-center mt-6">
                    <span>
                      The Devil May Cry Series boasts over <br class="hidden 3xl:inline-block" />
                      6.5 million sales worldwide.
                    </span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center items-center h-fit">
                <div class="w-[24rem]">
                  <div class="group h-[24rem] relative overflow-hidden">
                    <a
                      href="https://www.youtube.com/watch?v=fknT2roY9-A&list=PLc_IbVLk1pmgYBtngbQt2YTbbU39fUNm9&index=1&pp=iAQB"
                      target="_blank"
                    >
                      <img
                        class="absolute object-cover h-full transition-all group-hover:scale-125"
                        src="@/assets/images/media/vergil_potrait.jpg"
                        alt="Vergil Potrait"
                      />
                      <div
                        class="absolute w-full text-white py-5 font-semibold group-hover:tracking-wider text-center bottom-0 bg-black bg-opacity-50"
                      >
                        Vergil DLC VIDEO
                      </div></a
                    >
                  </div>
                  <div class="w-full flex justify-center py-6">
                    <IcOutlineAccessTime />
                    <span class="ml-2">01:57</span>
                  </div>
                  <div class="border border-[#2d3035] w-full"></div>
                  <div class="w-full text-center mt-6">
                    <span>
                      The Devil May Cry Series boasts over <br class="hidden 3xl:inline-block" />
                      6.5 million sales worldwide.
                    </span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center items-center h-fit">
                <div class="w-[24rem]">
                  <div class="group h-[24rem] relative overflow-hidden">
                    <a
                      href="https://www.youtube.com/watch?v=0xd78zMQ3i0&list=PLc_IbVLk1pmgYBtngbQt2YTbbU39fUNm9&index=12&pp=iAQB"
                      target="_blank"
                    >
                      <img
                        class="absolute object-cover h-full transition-all group-hover:scale-125"
                        src="@/assets/images/media/bloody_palace.jpg"
                        alt="Bloody Palace"
                      />
                      <div
                        class="absolute w-full text-white py-5 font-semibold group-hover:tracking-wider text-center bottom-0 bg-black bg-opacity-50"
                      >
                        Bloody Palace Trailer
                      </div></a
                    >
                  </div>
                  <div class="w-full flex justify-center py-6">
                    <IcOutlineAccessTime />
                    <span class="ml-2">01:06</span>
                  </div>
                  <div class="border border-[#2d3035] w-full"></div>
                  <div class="w-full text-center mt-6">
                    <span>
                      The Devil May Cry Series boasts over <br class="hidden 3xl:inline-block" />
                      6.5 million sales worldwide.
                    </span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center items-center h-fit">
                <div class="w-[24rem]">
                  <div class="group h-[24rem] relative overflow-hidden">
                    <a
                      href="https://www.youtube.com/watch?v=vc2656TCbgg&list=PLc_IbVLk1pmgYBtngbQt2YTbbU39fUNm9&index=25&pp=iAQB"
                      target="_blank"
                    >
                      <img
                        class="absolute object-cover h-full transition-all group-hover:scale-125"
                        src="@/assets/images/media/dmc_cover.jpg"
                        alt="Devil May Cry 5 Cover Photo"
                      />
                      <div
                        class="absolute w-full text-white py-5 font-semibold group-hover:tracking-wider text-center bottom-0 bg-black bg-opacity-50"
                      >
                        Announcement Trailer
                      </div></a
                    >
                  </div>
                  <div class="w-full flex justify-center py-6">
                    <IcOutlineAccessTime />
                    <span class="ml-2">02:40</span>
                  </div>
                  <div class="border border-[#2d3035] w-full"></div>
                  <div class="w-full text-center mt-6">
                    <span>
                      The Devil May Cry Series boasts over <br class="hidden 3xl:inline-block" />
                      6.5 million sales worldwide.
                    </span>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="flex flex-col justify-center items-center mt-14">
          <div id="about" class="font-bold text-5xl">About</div>
          <div class="border border-[#2d3035] mt-5 w-10"></div>
        </div>
      </div>
    </div>
  </section>
</template>
