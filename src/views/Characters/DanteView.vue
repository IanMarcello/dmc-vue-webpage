<script setup>
import IcRoundFormatListNumbered from '~icons/ic/round-format-list-numbered'
import IcRoundExpandMore from '~icons/ic/round-expand-more'
import { useToggleStore } from '@/stores/state'

const toggleStore = useToggleStore()
</script>

<template>
  <div class="grid grid-cols-1 gap-2 m-5 text-dark-900 dark:text-light-300">
    <section
      class="grid py-5 transition-all duration-500 bg-red-500"
      :class="toggleStore.openList ? 'h-full' : 'h-24'"
    >
      <div class="px-2">
        <div>
          <router-link
            :to="{ name: 'home' }"
            class="text-base font-medium text-indigo-600 dark:text-indigo-500 dark:hover:text-indigo-400 hover:text-indigo-500"
          >
            <span aria-hidden="true"> &larr;</span>
            Back to HeroSection
          </router-link>
        </div>
      </div>

      <div
        class="m-2 overflow-hidden transition-all duration-500 rounded-sm shadow-md w-80 bg-light-200 dark:bg-dark-400 hover:shadow-lg"
        :class="toggleStore.openList ? 'h-full' : 'h-14'"
      >
        <div
          class="relative z-10 flex flex-row justify-between p-4 mb-1 border-b-2 bg-light-200 dark:bg-dark-400 border-light-500 dark:border-dark-500"
        >
          <div class="flex flex-row">
            <IcRoundFormatListNumbered class="w-6 h-6 mr-1" />
            <span class="font-semibold">Contents</span>
          </div>

          <div
            class="transition-all duration-300 rounded cursor-pointer hover:bg-light-400 dark:hover:bg-dark-500"
            @click.prevent="toggleStore.toggleList"
            :class="toggleStore.openList ? 'rotate-0' : '-rotate-180 '"
          >
            <IcRoundExpandMore class="w-6 h-6" />
          </div>
        </div>

        <div
          class="px-4 transition-all duration-300 transform"
          :class="toggleStore.openList ? 'translate-y-0' : '-translate-y-44'"
        >
          <ol class="px-5 list-decimal">
            <li
              v-scroll-to="'#gridOne'"
              class="relative cursor-pointer list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 dark:hover:text-light-500"
            >
              Appearance
            </li>
            <li
              v-scroll-to="'#gridTwo'"
              class="relative cursor-pointer list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 dark:hover:text-light-500"
            >
              Personality
            </li>
            <li
              v-scroll-to="'#gridThree'"
              class="relative cursor-pointer list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 dark:hover:text-light-500"
            >
              Powers and Abilities
            </li>
            <li>
              <ol>
                <li
                  v-scroll-to="'#gridFive'"
                  class="relative cursor-pointer list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 dark:hover:text-light-500"
                >
                  Equipment
                </li>
                <li
                  v-scroll-to="'#gridFiveOne'"
                  class="relative ml-2 cursor-pointer list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 dark:hover:text-light-500"
                >
                  Content #5.1
                </li>
                <li
                  v-scroll-to="'#gridFiveTwo'"
                  class="relative ml-2 cursor-pointer list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 dark:hover:text-light-500"
                >
                  Content #5.2
                </li>
                <li
                  v-scroll-to="'#gridFiveThree'"
                  class="relative ml-2 cursor-pointer list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 dark:hover:text-light-500"
                >
                  Content #5.3
                </li>
                <li
                  v-scroll-to="'#gridFiveFour'"
                  class="relative ml-2 cursor-pointer list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 dark:hover:text-light-500"
                >
                  Content #5.4
                </li>
              </ol>
            </li>
            <li
              v-scroll-to="'#gridSix'"
              class="relative cursor-pointer list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 dark:hover:text-light-500"
            >
              Gameplay
            </li>
          </ol>
        </div>
      </div>
    </section>
    <section
      class="grid transition-all duration-500 bg-red-700"
      :class="toggleStore.openList ? 'translate-y-0' : '-translate-y-44'"
    >
      <div class="flex flex-wrap items-center mb-5">
        <div class="w-full md:w-1/2 md:px-8">
          <img
            src="@/assets/images/content/dante.webp"
            class="block mx-auto md:mr-0 md:ml-auto"
            alt="Dante"
          />
        </div>
        <div class="w-full md:w-1/2">
          <h4 class="mb-3 text-3xl font-bold glitch-transform">Dante</h4>
          <p class="mb-8 dark:text-light-500">
            One of the main protagonists of the Devil May Cry franchise, and the main playable
            character for the majority of the games in the series. He is the second son of the demon
            Sparda and the human Eva, the younger twin brother of Vergil, and the uncle of Nero.
            Dante is a paranormal mercenary, private investigator and vigilante Devil Hunter
            dedicated to exterminating evil demons and other malevolent supernatural forces; a
            mission he follows in pursuit of those that killed his mother and corrupted his brother.
          </p>
        </div>
      </div>
    </section>
    <section class="grid transition-all bg-red-700">
      <div
        id="gridOne"
        class="p-3 overflow-auto rounded-lg shadow h-96 bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200"
      >
        GRID ONE
      </div>
    </section>
    <section class="grid">
      <div
        id="gridTwo"
        class="p-3 overflow-auto rounded-lg shadow h-96 bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200"
      >
        GRID TWO
      </div>
    </section>
    <section class="grid">
      <div
        id="gridThree"
        class="p-3 overflow-auto rounded-lg shadow h-96 bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200"
      >
        GRID THREE
      </div>
    </section>
    <section class="grid">
      <div
        id="gridFour"
        class="p-3 overflow-auto rounded-lg shadow h-96 bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200"
      >
        GRID FOUR
      </div>
    </section>
    <section class="grid">
      <div
        class="grid grid-rows-4 p-3 overflow-auto rounded-lg shadow sm:col-span-6 gap-y-4 h-96 bg-light-50 dark:bg-dark-450"
      >
        <span id="gridFive">GRID FIVE</span>
        <div
          id="gridFiveOne"
          class="p-3 overflow-auto rounded-lg shadow bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200"
        >
          GRID 5.1
        </div>
        <div
          id="gridFiveTwo"
          class="p-3 overflow-auto rounded-lg shadow bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200"
        >
          GRID 5.2
        </div>
        <div
          id="gridFiveThree"
          class="p-3 overflow-auto rounded-lg shadow bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200"
        >
          GRID 5.3
        </div>
        <div
          id="gridFiveFour"
          class="p-3 overflow-auto rounded-lg shadow bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200"
        >
          GRID 5.4
        </div>
      </div>
    </section>
    <section class="grid">
      <div
        id="gridSix"
        class="p-3 overflow-auto rounded-lg shadow h-96 bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200"
      >
        GRID SIX
      </div>
    </section>
  </div>
</template>

<style>
.glitch-transform {
  position: relative;
  animation: shift 4s ease-in-out infinite alternate;
  transform: skewX(0deg);
  z-index: 1;
}

@keyframes shift {
  0%,
  40%,
  44%,
  58%,
  61%,
  65%,
  69%,
  73%,
  100% {
    transform: skewX(0deg);
  }

  41% {
    transform: skewX(10deg);
  }

  42% {
    transform: skewX(-10deg);
  }

  59% {
    transform: skewX(40deg);
  }

  60% {
    transform: skewX(-40deg);
  }

  63% {
    transform: skewX(10deg);
  }

  70% {
    transform: skewX(-50deg);
  }

  71% {
    transform: skewX(10deg);
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
  transform: scaleX(1);
}
</style>
