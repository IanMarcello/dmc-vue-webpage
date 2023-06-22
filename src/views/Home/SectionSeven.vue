<script setup>
import PreOrderButton from '@/components/PreOrderButton.vue'
</script>

<template>
  <section>
    <div class="w-full 4xl:flex 4xl:justify-center bg-theme-100">
      <div class="4xl:w-[2000px]">
        <div class="flex flex-col justify-center items-center">
          <div id="gallery" class="font-bold text-5xl">Gallery</div>
          <div class="border border-theme-400 mt-5 w-10"></div>
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
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_1.jpg" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_2.jpg" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_3.jpg" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_4.jpg" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_5.jpg" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_6.jpg" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_7.png" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_8.png" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_9.png" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_10.png" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_11.png" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_12.png" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_13.jpg" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_14.jpg" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_15.png" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_16.jpg" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_17.png" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_18.jpg" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_19.jpg" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_20.png" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_21.png" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_22.png" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_23.jpg" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_24.jpg" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_25.jpg" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide lazy="true">
              <div class="w-full flex justify-center items-center">
                <img src="@/assets/images/gallery/image_26.jpg" alt="" loading="lazy" />
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>

    <div class="w-full py-7 z-20 flex justify-center items-center">
      <PreOrderButton />
    </div>
  </section>
</template>

