<script setup>
import CibPlaystation from '~icons/cib/playstation'
import CibXbox from '~icons/cib/xbox'
import CibSteam from '~icons/cib/steam'
import IcOutlineAccessTime from '~icons/ic/outline-access-time'
</script>

<template>
  <section>
    <div class="4xl:flex 4xl:justify-center bg-theme-500 py-14">
      <div class="4xl:w-[2000px]">
        <div class="flex flex-col items-center justify-center">
          <div id="media" class="text-5xl font-bold">Media</div>
          <div class="w-10 mt-5 border border-theme-300"></div>
        </div>

        <div class="flex flex-col justify-between px-48 mt-14 gap-y-10 3xl:flex-row">
          <div>
            <div class="flex justify-center">
              <div class="w-[600px]">
                <img src="@/assets/images/media/dmc_demo.webp" alt="Devil May Cry 5 Demo" />
              </div>
            </div>

            <div class="flex flex-col items-center justify-center mt-5">
              <div class="text-xl font-bold">The Devil May Cry 5 Demo is Live!</div>
              <div class="w-10 mt-5 border border-theme-300"></div>
            </div>

            <div class="flex justify-center mt-5 gap-x-10">
              <a href="#" target="_blank" class="flex items-center cursor-pointer group">
                <CibPlaystation
                  class="transition-colors duration-200 w-7 h-7 group-hover:text-theme-50"
                />
                <span
                  class="ml-2 text-xl transition-colors duration-200 font-playstation_regular group-hover:bg-gradient-to-r group-hover:from-theme-50 group-hover:to-theme-100 group-hover:bg-clip-text group-hover:text-transparent"
                  >PS4</span
                >
              </a>
              <a href="#" target="_blank" class="flex items-center cursor-pointer group">
                <CibXbox class="transition-colors duration-200 w-7 h-7 group-hover:text-theme-50" />
                <span
                  class="ml-2 text-xl transition-colors duration-200 font-xbox group-hover:bg-gradient-to-r group-hover:from-theme-50 group-hover:to-theme-100 group-hover:bg-clip-text group-hover:text-transparent"
                  >XBOX ONE</span
                >
              </a>
            </div>
          </div>
          <div>
            <div class="flex justify-center">
              <div class="w-[600px]">
                <img
                  src="@/assets/images/media/dmc_collector.webp"
                  alt="Devil May Cry 5 Collector's Edition"
                />
              </div>
            </div>

            <div class="flex flex-col items-center justify-center mt-5">
              <div class="text-xl font-bold">The Devil May Cry 5 Collector's Edition</div>
              <div class="w-10 mt-5 border border-theme-300"></div>
            </div>

            <div class="flex justify-center mt-5 gap-x-10">
              <a href="#" target="_blank" class="flex items-center cursor-pointer group">
                <CibPlaystation
                  class="transition-colors duration-200 w-7 h-7 group-hover:text-theme-50"
                />
                <span
                  class="ml-2 text-xl uppercase transition-colors duration-200 font-playstation_regular group-hover:bg-gradient-to-r group-hover:from-theme-50 group-hover:to-theme-100 group-hover:bg-clip-text group-hover:text-transparent"
                  >PS4</span
                >
              </a>
              <a href="#" target="_blank" class="flex items-center cursor-pointer group">
                <CibXbox class="transition-colors duration-200 w-7 h-7 group-hover:text-theme-50" />
                <span
                  class="ml-2 text-xl uppercase transition-colors duration-200 font-xbox group-hover:bg-gradient-to-r group-hover:from-theme-50 group-hover:to-theme-100 group-hover:bg-clip-text group-hover:text-transparent"
                  >XBOX ONE</span
                >
              </a>
              <a href="#" target="_blank" class="flex items-center cursor-pointer group">
                <CibSteam
                  class="transition-colors duration-200 w-7 h-7 group-hover:text-theme-50"
                />
                <span
                  class="ml-2 text-xl font-bold tracking-wider uppercase transition-colors duration-200 font-steam group-hover:bg-gradient-to-r group-hover:from-theme-50 group-hover:to-theme-100 group-hover:bg-clip-text group-hover:text-transparent"
                  >STEAM</span
                >
              </a>
            </div>
          </div>
        </div>

        <div class="px-48 mt-14">
          <swiper-container
            :loop="true"
            :slides-per-view="3"
            :space-between="10"
            :navigation="true"
            :keyboard="{
              enabled: true
            }"
          >
            <swiper-slide>
              <div class="flex items-center justify-center">
                <div class="w-[24rem]">
                  <div class="group h-[24rem] relative overflow-hidden">
                    <a
                      href="https://www.youtube.com/watch?v=MWxlbnI9mpU&list=PLc_IbVLk1pmgYBtngbQt2YTbbU39fUNm9&index=5&pp=iAQB"
                      target="_blank"
                      ><img
                        class="absolute object-cover transition-all group-hover:scale-125"
                        src="@/assets/images/media/nero.webp"
                        alt="Nero"
                      />
                      <div
                        class="absolute bottom-0 w-full py-5 text-lg font-semibold text-center text-white bg-black bg-opacity-50 group-hover:tracking-wider"
                      >
                        Final Trailer
                      </div></a
                    >
                  </div>
                  <div class="flex justify-center py-6">
                    <IcOutlineAccessTime />
                    <span class="ml-2">02:50</span>
                  </div>
                  <div class="w-full border border-theme-300"></div>
                  <div class="mt-6 text-center">
                    <span> The Devil May Cry Series boasts over 6.5 million sales worldwide. </span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center h-fit">
                <div class="w-[24rem]">
                  <div class="group h-[24rem] relative overflow-hidden">
                    <a
                      href="https://www.youtube.com/watch?v=kBbb-XXRIwM&list=PLc_IbVLk1pmgYBtngbQt2YTbbU39fUNm9&index=6&pp=iAQB"
                      target="_blank"
                    >
                      <img
                        class="absolute object-cover transition-all group-hover:scale-125"
                        src="@/assets/images/media/nero_closeup.webp"
                        alt="Nero Close-Up"
                      />
                      <div
                        class="absolute bottom-0 w-full py-5 text-lg font-semibold text-center text-white bg-black bg-opacity-50 group-hover:tracking-wider"
                      >
                        Nero Combat Video
                      </div></a
                    >
                  </div>
                  <div class="flex justify-center py-6">
                    <IcOutlineAccessTime />
                    <span class="ml-2">00:48</span>
                  </div>
                  <div class="w-full border border-theme-300"></div>
                  <div class="mt-6 text-center">
                    <span> The Devil May Cry Series boasts over 6.5 million sales worldwide. </span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center h-fit">
                <div class="w-[24rem]">
                  <div class="group h-[24rem] relative overflow-hidden">
                    <a
                      href="https://www.youtube.com/watch?v=pXdP2VDv9lo&list=PLc_IbVLk1pmgYBtngbQt2YTbbU39fUNm9&index=7&pp=iAQB"
                      target="_blank"
                    >
                      <img
                        class="absolute object-cover transition-all scale-100 group-hover:scale-125"
                        src="@/assets/images/media/dante_closeup.webp"
                        alt="Dante Close-Up"
                      />
                      <div
                        class="absolute bottom-0 w-full py-5 text-lg font-semibold text-center text-white bg-black bg-opacity-50 group-hover:tracking-wider"
                      >
                        Dante Combat Video
                      </div></a
                    >
                  </div>
                  <div class="flex justify-center py-6">
                    <IcOutlineAccessTime />
                    <span class="ml-2">00:48</span>
                  </div>
                  <div class="w-full border border-theme-300"></div>
                  <div class="mt-6 text-center">
                    <span> The Devil May Cry Series boasts over 6.5 million sales worldwide. </span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center h-fit">
                <div class="w-[24rem]">
                  <div class="group h-[24rem] relative overflow-hidden">
                    <a
                      href="https://www.youtube.com/watch?v=8tmhE2qhTSc&list=PLc_IbVLk1pmgYBtngbQt2YTbbU39fUNm9&index=8&pp=iAQB"
                      target="_blank"
                    >
                      <img
                        class="absolute object-cover transition-all group-hover:scale-125"
                        src="@/assets/images/media/v_closeup.webp"
                        alt="V Close-Up"
                      />
                      <div
                        class="absolute bottom-0 w-full py-5 text-lg font-semibold text-center text-white bg-black bg-opacity-50 group-hover:tracking-wider"
                      >
                        V Combat Video
                      </div></a
                    >
                  </div>
                  <div class="flex justify-center py-6">
                    <IcOutlineAccessTime />
                    <span class="ml-2">00:50</span>
                  </div>
                  <div class="w-full border border-theme-300"></div>
                  <div class="mt-6 text-center">
                    <span> The Devil May Cry Series boasts over 6.5 million sales worldwide. </span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center h-fit">
                <div class="w-[24rem]">
                  <div class="group h-[24rem] relative overflow-hidden">
                    <a
                      href="https://www.youtube.com/watch?v=fknT2roY9-A&list=PLc_IbVLk1pmgYBtngbQt2YTbbU39fUNm9&index=1&pp=iAQB"
                      target="_blank"
                    >
                      <img
                        class="absolute object-cover transition-all group-hover:scale-125"
                        src="@/assets/images/media/vergil_potrait.webp"
                        alt="Vergil Potrait"
                      />
                      <div
                        class="absolute bottom-0 w-full py-5 text-lg font-semibold text-center text-white bg-black bg-opacity-50 group-hover:tracking-wider"
                      >
                        Vergil DLC Video
                      </div></a
                    >
                  </div>
                  <div class="flex justify-center py-6">
                    <IcOutlineAccessTime />
                    <span class="ml-2">01:57</span>
                  </div>
                  <div class="w-full border border-theme-300"></div>
                  <div class="mt-6 text-center">
                    <span> The Devil May Cry Series boasts over 6.5 million sales worldwide. </span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center h-fit">
                <div class="w-[24rem]">
                  <div class="group h-[24rem] relative overflow-hidden">
                    <a
                      href="https://www.youtube.com/watch?v=0xd78zMQ3i0&list=PLc_IbVLk1pmgYBtngbQt2YTbbU39fUNm9&index=12&pp=iAQB"
                      target="_blank"
                    >
                      <img
                        class="absolute object-cover transition-all group-hover:scale-125"
                        src="@/assets/images/media/bloody_palace.webp"
                        alt="Bloody Palace"
                      />
                      <div
                        class="absolute bottom-0 w-full py-5 text-lg font-semibold text-center text-white bg-black bg-opacity-50 group-hover:tracking-wider"
                      >
                        Bloody Palace Trailer
                      </div></a
                    >
                  </div>
                  <div class="flex justify-center py-6">
                    <IcOutlineAccessTime />
                    <span class="ml-2">01:06</span>
                  </div>
                  <div class="w-full border border-theme-300"></div>
                  <div class="mt-6 text-center">
                    <span> The Devil May Cry Series boasts over 6.5 million sales worldwide. </span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center h-fit">
                <div class="w-[24rem]">
                  <div class="group h-[24rem] relative overflow-hidden">
                    <a
                      href="https://www.youtube.com/watch?v=vc2656TCbgg&list=PLc_IbVLk1pmgYBtngbQt2YTbbU39fUNm9&index=25&pp=iAQB"
                      target="_blank"
                    >
                      <img
                        class="absolute object-cover transition-all group-hover:scale-125"
                        src="@/assets/images/media/dmc_cover.webp"
                        alt="Devil May Cry 5 Cover Photo"
                      />
                      <div
                        class="absolute bottom-0 w-full py-5 text-lg font-semibold text-center text-white bg-black bg-opacity-50 group-hover:tracking-wider"
                      >
                        Announcement Trailer
                      </div></a
                    >
                  </div>
                  <div class="flex justify-center py-6">
                    <IcOutlineAccessTime />
                    <span class="ml-2">02:40</span>
                  </div>
                  <div class="w-full border border-theme-300"></div>
                  <div class="mt-6 text-center">
                    <span> The Devil May Cry Series boasts over 6.5 million sales worldwide. </span>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>

        <div class="flex flex-col items-center justify-center mt-14">
          <div id="about" class="text-5xl font-bold">About</div>
          <div class="w-10 mt-5 border border-theme-300"></div>
        </div>
      </div>
    </div>
  </section>
</template>
