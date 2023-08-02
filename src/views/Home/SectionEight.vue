<script setup>
import BasilTwitterSolid from '~icons/basil/twitter-solid'
import BasilFacebookSolid from '~icons/basil/facebook-solid'
import BasilInstagramSolid from '~icons/basil/instagram-solid'
import BasilYoutubeSolid from '~icons/basil/youtube-solid'
import CibPlaystation from '~icons/cib/playstation'
import CibXbox from '~icons/cib/xbox'
import CibSteam from '~icons/cib/steam'
</script>

<template>
  <section>
    <div>
      <div class="relative">
        <div>
          <img class="opacity-10" src="@/assets/images/background.webp" alt="Nero" />
        </div>
        <div class="absolute top-0 flex flex-col items-center justify-center w-full h-full">
          <div>
            <span id="news" class="text-6xl font-bold text-center">Newsletter</span>
          </div>

          <div class="relative w-full mt-28 px-80">
            <input
              type="email"
              class="text-center text-2xl bg-transparent border-y-2 border-[#2f3337] placeholder:text-[#fdfcfd] w-full py-10 outline-0"
              placeholder="Your e-mail here"
            />
          </div>

          <div class="relative flex flex-row justify-center text-base font-bold text-center mt-28">
            <a
              href="#"
              target="_blank"
              class="w-56 py-4 transition-all ease-in border cursor-pointer hover:bg-theme-400 hover:tracking-widest"
            >
              <span>SUBMIT</span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col items-center h-full py-24">
          <div>
            <span class="text-3xl text-center">Check here for the latest information</span>
          </div>

          <div class="flex flex-row mt-10 gap-x-5">
            <a href="#" target="_blank"
              class="p-5 transition-colors border rounded-full cursor-pointer group hover:bg-theme-400"
            >
              <BasilTwitterSolid class="transition-transform w-7 h-7 group-hover:scale-125" />
            </a>
            <a href="#" target="_blank"
              class="p-5 transition-colors border rounded-full cursor-pointer group hover:bg-theme-400"
            >
              <BasilFacebookSolid class="transition-transform w-7 h-7 group-hover:scale-125" />
            </a>
            <a href="#" target="_blank"
              class="p-5 transition-colors border rounded-full cursor-pointer group hover:bg-theme-400"
            >
              <BasilInstagramSolid class="transition-transform w-7 h-7 group-hover:scale-125" />
            </a>
            <a href="#" target="_blank"
              class="p-5 transition-colors border rounded-full cursor-pointer group hover:bg-theme-400"
            >
              <BasilYoutubeSolid class="transition-transform w-7 h-7 group-hover:scale-125" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col items-center h-full py-10 bg-theme-500">
          <div class="flex justify-center mt-5 gap-x-10">
            <div class="flex items-center">
              <CibPlaystation class="w-7 h-7" />
              <span class="ml-2 text-xl font-playstation_regular">PS4</span>
            </div>
            <div class="flex items-center">
              <CibXbox class="w-7 h-7" />
              <span class="ml-2 text-xl font-xbox">XBOX ONE</span>
            </div>
            <div class="flex items-center">
              <CibSteam class="w-7 h-7" />
              <span class="ml-2 text-xl font-bold tracking-wider font-steam">STEAM</span>
            </div>
          </div>

          <div class="flex w-full px-[26rem] mt-10">
            <div class="w-full text-center">
              <span>
                "Playstation" and the "PS" Family logo are registered trademarks and PS4 is a
                trademark of Sony Interactive Entertainment Inc. &#169;Valve Corporation. Steam and
                the Steam logo are trademarks and/or registered trademarks of Valve Corporation in
                the U.S and/or other countries.
              </span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center py-5 bg-theme-800">
          <div class="flex mt-5 w-60">
            <img src="@/assets/images/capcom_logo.webp" alt="Capcom Logo" />
          </div>

          <div class="flex w-full px-[26rem] mt-5">
            <div class="w-full text-center">
              <span> &#169; CAPCOM CO.,LTD. 2019 ALL RIGHTS RESERVED. </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
