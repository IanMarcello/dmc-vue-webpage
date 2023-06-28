<script setup>
import PreOrderButton from '@/components/PreOrderButton.vue'
</script>

<template>
  <section>
    <div class="pb-28 4xl:flex 4xl:justify-center bg-theme-100">
      <div class="4xl:w-[2000px]">
        <div class="flex flex-col items-center justify-center">
          <div id="gallery" class="text-5xl font-bold">Gallery</div>
          <div class="w-10 mt-5 border border-theme-400"></div>
        </div>

        <div class="mt-14 px-44">
          <swiper-container
            slides-per-view="4"
            grid-rows="2"
            grid-fill="row"
            space-between="20"
            pagination-type="fraction"
            scrollbar-hide="false"
            scrollbar-draggable="true"
            navigation="true"
            keyboard-enabled="true"
          >
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_1.jpg" alt="Nero #1" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_2.jpg" alt="Nero #2" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_3.jpg" alt="Nero #3" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_4.jpg" alt="Nero #4" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_5.jpg" alt="Nero #5" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_6.jpg" alt="Urizen" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_7.png" alt="Dante #1" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_8.png" alt="Nero #6" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_9.png" alt="Dante #2" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_10.png" alt="Trish #1" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_11.png" alt="Lady #1" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_12.png" alt="Dante #3" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_13.jpg" alt="Nero #7" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_14.jpg" alt="Nico's Van" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_15.png" alt="Dante #4" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_16.jpg" alt="V #1" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_17.png" alt="SDT Dante #1" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_18.jpg" alt="Nero & V" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_19.jpg" alt="V #2" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_20.png" alt="Dante & Nero" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_21.png" alt="Dante, Vergil & SDT Nero" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_22.png" alt="Dante & Vergil #1" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_23.jpg" alt="Nero #8" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_24.jpg" alt="Nero #9" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_25.jpg" alt="Dante & Vergil #2" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_26.jpg" alt="Vergil #1" />
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center py-7">
      <PreOrderButton />
    </div>
  </section>
</template>

