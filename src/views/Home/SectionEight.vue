<script setup></script>

<template>
  <section>
    <!-- <div
      class="bg-[url('@/assets/images/background_1.jpg')] bg-contain bg-center bg-no-repeat bg-opacity-100 h-screen"
    >
      <span>Newsletter</span>
    </div> -->
    <div class="h-fit">
      <div class="">
        <img
          class="absolute opacity-10 object-cover"
          src="@/assets/images/background_1.jpg"
          alt=""
        />
      </div>
      <div class="flex flex-col mt-10 py-10 h-full items-center">
        <div class="mt-40">
          <span class="font-bold text-6xl text-center">Newsletter</span>
        </div>

        <div class="relative mt-36 px-80 w-full">
          <input
            type="email"
            class="text-center bg-transparent border-y-2 placeholder:text-white w-full py-10"
            placeholder="Your e-mail here"
          />
        </div>

        <div
          class="mt-36 flex flex-row text-center gap-x-10 justify-center 3xl:justify-start text-base font-bold"
        >
          <a href="#">
            <div
              class="transition-all ease-in border py-3 w-56 cursor-pointer hover:bg-theme-300 hover:tracking-widest"
            >
              <span>SUBMIT</span>
            </div></a
          >
        </div>
      </div>
    </div>
  </section>
</template>
