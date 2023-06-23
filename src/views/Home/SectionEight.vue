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
    <div class="h-fit">
      <img class="absolute opacity-10 object-cover" src="@/assets/images/background.jpg" alt="Nero" />
      <div class="flex flex-col py-[14.53rem] h-full items-center">
        <div>
          <span id="news" class="font-bold text-6xl text-center">Newsletter</span>
        </div>

        <div class="relative mt-28 px-80 w-full">
          <input
            type="email"
            class="text-center text-2xl bg-transparent border-y-2 border-[#2f3337] placeholder:text-[#fdfcfd] w-full py-10 outline-0"
            placeholder="Your e-mail here"
          />
        </div>

        <div
          class="relative mt-28 flex flex-row text-center gap-x-10 justify-center 3xl:justify-start text-base font-bold"
        >
          <a href="#">
            <div
              class="transition-all ease-in border py-4 w-56 cursor-pointer hover:bg-theme-300 hover:tracking-widest"
            >
              <span>SUBMIT</span>
            </div></a
          >
        </div>
      </div>
    </div>
    <div>
      <div class="flex flex-col py-24 h-full items-center bg-theme-900">
        <div>
          <span class="text-3xl text-center">Check here for the latest information</span>
        </div>

        <div class="flex flex-row gap-x-5 mt-10">
          <div
            class="group p-5 border rounded-full hover:bg-theme-300 cursor-pointer transition-colors"
          >
            <BasilTwitterSolid class="w-7 h-7 group-hover:scale-125 transition-transform" />
          </div>
          <div
            class="group p-5 border rounded-full hover:bg-theme-300 cursor-pointer transition-colors"
          >
            <BasilFacebookSolid class="w-7 h-7 group-hover:scale-125 transition-transform" />
          </div>
          <div
            class="group p-5 border rounded-full hover:bg-theme-300 cursor-pointer transition-colors"
          >
            <BasilInstagramSolid class="w-7 h-7 group-hover:scale-125 transition-transform" />
          </div>
          <div
            class="group p-5 border rounded-full hover:bg-theme-300 cursor-pointer transition-colors"
          >
            <BasilYoutubeSolid class="w-7 h-7 group-hover:scale-125 transition-transform" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex flex-col py-10 h-full items-center bg-theme-100">
        <div class="flex justify-center gap-x-10 mt-5">
          <div class="flex items-center">
            <CibPlaystation class="w-7 h-7" />
            <span class="font-playstation_regular uppercase text-xl ml-2">PS4</span>
          </div>
          <div class="flex items-center">
            <CibXbox class="w-7 h-7" />
            <span class="font-xbox uppercase text-xl ml-2">XBOX ONE</span>
          </div>
          <div class="flex items-center">
            <CibSteam class="w-7 h-7" />
            <span class="font-steam font-bold tracking-wider uppercase text-xl ml-2">STEAM</span>
          </div>
        </div>

        <div class="flex w-full px-[26rem] mt-10">
          <div class="w-full text-center">
            <span>
              "Playstation" and the "PS" Family logo are registered trademarks and PS4 is a
              trademark of Sony Interactive Entertainment Inc. &#169;Valve Corporation. Steam and
              the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the
              U.S and/or other countries.
            </span>
          </div>
        </div>
      </div>
      <div class="flex flex-col py-5 items-center bg-theme-900">
        <div class="flex w-60 mt-5">
          <img class="object-cover" src="@/assets/images/capcom_logo.png" alt="Capcom Logo" />
        </div>

        <div class="flex w-full px-[26rem] mt-5">
          <div class="w-full text-center">
            <span> &#169; CAPCOM CO.,LTD. 2019 ALL RIGHTS RESERVED. </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
