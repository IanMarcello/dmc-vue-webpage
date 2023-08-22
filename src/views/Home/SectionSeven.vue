<script setup>
import PreOrderButton from '@/components/PreOrderButton.vue'
</script>

<template>
  <section>
    <div class="pb-28 4xl:flex 4xl:justify-center bg-theme-500">
      <div class="4xl:w-500">
        <div class="flex flex-col items-center justify-center">
          <div id="gallery" class="text-5xl font-bold">Gallery</div>
          <div class="w-10 mt-5 border border-theme-300"></div>
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
                <img src="@/assets/images/gallery/image_1.webp" alt="Nero #1" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_2.webp" alt="Nero #2" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_3.webp" alt="Nero #3" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_4.webp" alt="Nero #4" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_5.webp" alt="Nero #5" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_6.webp" alt="Urizen" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_7.webp" alt="Dante #1" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_8.webp" alt="Nero #6" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_9.webp" alt="Dante #2" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_10.webp" alt="Trish #1" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_11.webp" alt="Lady #1" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_12.webp" alt="Dante #3" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_13.webp" alt="Nero #7" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_14.webp" alt="Nico's Van" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_15.webp" alt="Dante #4" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_16.webp" alt="V #1" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_17.webp" alt="SDT Dante #1" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_18.webp" alt="Nero & V" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_19.webp" alt="V #2" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_20.webp" alt="Dante & Nero" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_21.webp" alt="Dante, Vergil & SDT Nero" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_22.webp" alt="Dante & Vergil #1" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_23.webp" alt="Nero #8" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_24.webp" alt="Nero #9" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_25.webp" alt="Dante & Vergil #2" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex items-center justify-center">
                <img src="@/assets/images/gallery/image_26.webp" alt="Vergil #1" />
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
