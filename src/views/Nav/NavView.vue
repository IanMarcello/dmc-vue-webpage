<template>
  <div class="relative flex top-[83px] left-10 w-fit gap-44">
    <div class="flex items-end flex-none bg-theme-100">
      <div>
        <img
          src="@/assets/images/nav/nav.webp"
          class="object-cover w-full h-full"
          alt="Devil May Cry 5 Logo"
        />
      </div>
    </div>
    <div class="flex items-center bg-theme-100">
      <div>
        <router-link
          :to="{ name: '' }"
          v-scroll-to="'#about'"
          class="px-3 text-base font-medium transition-colors border border-transparent rounded-md cursor-pointer hover:text-red-600"
          >About</router-link
        >
      </div>
      <div>
        <router-link
          :to="{ name: '' }"
          v-scroll-to="'#character'"
          class="px-3 text-base font-medium transition-colors border border-transparent rounded-md cursor-pointer hover:text-red-600"
          >Character</router-link
        >
      </div>
      <div>
        <router-link
          :to="{ name: '' }"
          v-scroll-to="'#system'"
          class="px-3 text-base font-medium transition-colors border border-transparent rounded-md cursor-pointer hover:text-red-600"
          >System</router-link
        >
      </div>
      <div>
        <router-link
          :to="{ name: '' }"
          v-scroll-to="'#media'"
          class="px-3 text-base font-medium transition-colors border border-transparent rounded-md cursor-pointer hover:text-red-600"
          >Media</router-link
        >
      </div>
      <div>
        <router-link
          :to="{ name: '' }"
          v-scroll-to="'#news'"
          class="px-3 text-base font-medium transition-colors border border-transparent rounded-md cursor-pointer hover:text-red-600"
          >News</router-link
        >
      </div>
    </div>
  </div>
</template>
