<script setup>
import IcRoundFormatListNumbered from '~icons/ic/round-format-list-numbered'
import IcRoundExpandMore from '~icons/ic/round-expand-more'
import IcRoundArrowBack from '~icons/ic/round-arrow-back'
import { useToggleStore } from '@/stores/state'

const toggleStore = useToggleStore()

const listItems = [
  {
    id: 'itemOne',
    name: 'Appearance'
  },
  {
    id: 'itemTwo',
    name: 'Personality'
  },
  {
    id: 'itemThree',
    name: 'Powers and Abilities'
  },
  {
    id: 'itemFour',
    name: 'Equipment'
  },
  {
    id: 'itemFive',
    name: 'Gameplay'
  }
]
</script>

<template>
  <main class="p-5 mx-5">
    <section class="flex flex-row justify-between mt-5">
      <div class="flex flex-col">
        <div class="px-2">
          <div>
            <router-link
              :to="{ name: 'home' }"
              class="flex text-base font-medium text-theme-100 hover:text-theme-50"
            >
              <IcRoundArrowBack class="w-6 h-6" />
              Back to HeroSection
            </router-link>
          </div>
        </div>

        <div class="m-2 overflow-hidden rounded-sm w-80">
          <div class="relative z-10 flex flex-row justify-between p-4 border-2 bg-theme-700">
            <div class="flex flex-row">
              <IcRoundFormatListNumbered class="w-6 h-6 mr-1" />
              <span class="font-semibold">Contents</span>
            </div>

            <div
              class="transition-all duration-300 cursor-pointer"
              @click.prevent="toggleStore.toggleList"
              :class="toggleStore.openList ? 'rotate-0' : '-rotate-180 '"
            >
              <IcRoundExpandMore class="w-6 h-6" />
            </div>
          </div>

          <div
            class="px-4 py-2 border-b-2 border-x-2"
            :class="toggleStore.openList ? 'translate-y-0' : '-translate-y-72'"
          >
            <ol class="px-5 list-decimal">
              <li
                v-for="item in listItems"
                :key="item.id"
                v-scroll-to="'#' + item.id"
                class="relative cursor-pointer list before:bg-slate-200 hover:text-slate-400"
              >
                <span>
                  {{ item.name }}
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div class="flex flex-col w-72">
        <div class="text-center">
          <h4 class="text-base glitch-transform">Lady</h4>
          <div class="py-0.5 bg-gradient-to-r from-[#101217] via-theme-100 to-[#101217]"></div>
        </div>

        <div class="flex justify-center w-full h-full">
          <img
            class="w-40"
            src="@/assets/images/characters/lady/lady.webp"
            alt="Lady"
          />
        </div>
      </div>
    </section>

    <section id="itemOne" class="flex flex-col mt-5 gap-y-4">
      <div class="text-start">
        <h4 class="text-lg font-semibold">Appearance</h4>
        <div class="py-0.5 bg-gradient-to-r from-theme-100 to-[#101217]"></div>
      </div>

      <div class="flex flex-col justify-start w-full h-full gap-y-3">
        CONTENT
      </div>
    </section>

    <section id="itemTwo" class="flex flex-col mt-5 gap-y-4">
      <div class="text-start">
        <h4 class="text-lg font-semibold">Personality</h4>
        <div class="py-0.5 bg-gradient-to-r from-theme-100 to-[#101217]"></div>
      </div>

      <div class="flex justify-start w-full h-full">CONTENT</div>
    </section>

    <section id="itemThree" class="flex flex-col mt-5 gap-y-4">
      <div class="text-start">
        <h4 class="text-lg font-semibold">Powers and Abilities</h4>
        <div class="py-0.5 bg-gradient-to-r from-theme-100 to-[#101217]"></div>
      </div>

      <div class="flex justify-start w-full h-full">CONTENT</div>
    </section>

    <section id="itemFour" class="flex flex-col mt-5 gap-y-4">
      <div class="text-start">
        <h4 class="text-lg font-semibold">Equipment</h4>
        <div class="py-0.5 bg-gradient-to-r from-theme-100 to-[#101217]"></div>
      </div>

      <div class="flex justify-start w-full h-full">CONTENT</div>
    </section>

    <section id="itemFive" class="flex flex-col mt-5 gap-y-4">
      <div class="text-start">
        <h4 class="text-lg font-semibold">Gameplay</h4>
        <div class="py-0.5 bg-gradient-to-r from-theme-100 to-[#101217]"></div>
      </div>

      <div class="flex justify-start w-full h-full">CONTENT</div>
    </section>
  </main>
</template>

<style>
.glitch {
  position: relative;
  z-index: 1;
}

.glitch:before,
.glitch:after {
  display: block;
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}

.glitch:before {
  animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  color: #00ffff;
  z-index: -1;
}

.glitch:after {
  animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  color: #5900ff;
  z-index: -2;
}

@keyframes glitch-color {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-3px, 3px);
  }

  40% {
    transform: translate(-3px, -3px);
  }

  60% {
    transform: translate(3px, 3px);
  }

  80% {
    transform: translate(3px, -3px);
  }

  to {
    transform: translate(0);
  }
}

.list {
  padding: 2px 0px 2px 0px;
}

.list::before {
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 4px;
  bottom: 0;
  left: 0;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.list:hover::before {
  transform-origin: left;
  transform: scaleX(1.1);
}
</style>
