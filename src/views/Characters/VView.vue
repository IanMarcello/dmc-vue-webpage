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
          <h4 class="text-base glitch-transform">V</h4>
          <div class="py-0.5 bg-gradient-to-r from-[#101217] via-theme-100 to-[#101217]"></div>
        </div>

        <div class="flex justify-center w-full h-full">
          <img
            class="w-40"
            src="@/assets/images/characters/v/v_heroicon.webp"
            alt="V"
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
.glitch-noise {
  position: relative;
  z-index: 1;
}

.glitch-noise:before {
  content: attr(data-glitch-noise);
  position: absolute;
  top: 0;
  left: -2px;
  width: 100%;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-before 3s infinite linear alternate-reverse;
}

.glitch-noise:after {
  content: attr(data-glitch-noise);
  position: absolute;
  top: 0;
  left: 2px;
  width: 100%;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-after 2s infinite linear alternate-reverse;
}

@keyframes noise-before {
  0% {
    clip: rect(61px, 9999px, 52px, 0);
  }

  5% {
    clip: rect(33px, 9999px, 144px, 0);
  }

  10% {
    clip: rect(121px, 9999px, 115px, 0);
  }

  15% {
    clip: rect(144px, 9999px, 162px, 0);
  }

  20% {
    clip: rect(62px, 9999px, 180px, 0);
  }

  25% {
    clip: rect(34px, 9999px, 42px, 0);
  }

  30% {
    clip: rect(147px, 9999px, 179px, 0);
  }

  35% {
    clip: rect(99px, 9999px, 63px, 0);
  }

  40% {
    clip: rect(188px, 9999px, 122px, 0);
  }

  45% {
    clip: rect(154px, 9999px, 14px, 0);
  }

  50% {
    clip: rect(63px, 9999px, 37px, 0);
  }

  55% {
    clip: rect(161px, 9999px, 147px, 0);
  }

  60% {
    clip: rect(109px, 9999px, 175px, 0);
  }

  65% {
    clip: rect(157px, 9999px, 88px, 0);
  }

  70% {
    clip: rect(173px, 9999px, 131px, 0);
  }

  75% {
    clip: rect(62px, 9999px, 70px, 0);
  }

  80% {
    clip: rect(24px, 9999px, 153px, 0);
  }

  85% {
    clip: rect(138px, 9999px, 40px, 0);
  }

  90% {
    clip: rect(79px, 9999px, 136px, 0);
  }

  95% {
    clip: rect(25px, 9999px, 34px, 0);
  }

  100% {
    clip: rect(173px, 9999px, 166px, 0);
  }
}

@keyframes noise-after {
  0% {
    clip: rect(26px, 9999px, 33px, 0);
  }

  5% {
    clip: rect(140px, 9999px, 198px, 0);
  }

  10% {
    clip: rect(184px, 9999px, 89px, 0);
  }

  15% {
    clip: rect(121px, 9999px, 6px, 0);
  }

  20% {
    clip: rect(181px, 9999px, 99px, 0);
  }

  25% {
    clip: rect(154px, 9999px, 133px, 0);
  }

  30% {
    clip: rect(134px, 9999px, 169px, 0);
  }

  35% {
    clip: rect(26px, 9999px, 187px, 0);
  }

  40% {
    clip: rect(147px, 9999px, 137px, 0);
  }

  45% {
    clip: rect(31px, 9999px, 52px, 0);
  }

  50% {
    clip: rect(191px, 9999px, 109px, 0);
  }

  55% {
    clip: rect(74px, 9999px, 54px, 0);
  }

  60% {
    clip: rect(145px, 9999px, 75px, 0);
  }

  65% {
    clip: rect(153px, 9999px, 198px, 0);
  }

  70% {
    clip: rect(99px, 9999px, 136px, 0);
  }

  75% {
    clip: rect(118px, 9999px, 192px, 0);
  }

  80% {
    clip: rect(1px, 9999px, 83px, 0);
  }

  85% {
    clip: rect(145px, 9999px, 98px, 0);
  }

  90% {
    clip: rect(121px, 9999px, 154px, 0);
  }

  95% {
    clip: rect(156px, 9999px, 44px, 0);
  }

  100% {
    clip: rect(67px, 9999px, 122px, 0);
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
