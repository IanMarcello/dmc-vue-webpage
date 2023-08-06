<script setup>
import IcRoundFormatListNumbered from '~icons/ic/round-format-list-numbered'
import IcRoundExpandMore from '~icons/ic/round-expand-more'
import IcRoundArrowBack from '~icons/ic/round-arrow-back'
import { useToggleStore } from '@/stores/state'

const toggleStore = useToggleStore()
</script>

<template>
  <main>
    <section class="flex flex-row justify-between p-5 mt-5 ml-5 sm:flex-row">
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

        <div class="m-2 overflow-hidden rounded-sm shadow-md w-80 hover:shadow-lg">
          <div class="relative z-10 flex flex-row justify-between p-4 border-2 bg-theme-700">
            <div class="flex flex-row">
              <IcRoundFormatListNumbered class="w-6 h-6 mr-1" />
              <span class="font-semibold">Contents</span>
            </div>

            <div
              class="transition-all duration-300 rounded cursor-pointer"
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
                v-scroll-to="'#containerOne'"
                class="relative cursor-pointer list before:bg-slate-200 hover:text-slate-400"
              >
                Appearance
              </li>
              <li
                v-scroll-to="'#containerTwo'"
                class="relative cursor-pointer list before:bg-slate-200 hover:text-slate-400"
              >
                Personality
              </li>
              <li
                v-scroll-to="'#containerThree'"
                class="relative cursor-pointer list before:bg-slate-200 hover:text-slate-400"
              >
                Powers and Abilities
              </li>
              <li>
                <ol>
                  <li
                    v-scroll-to="'#containerFive'"
                    class="relative cursor-pointer list before:bg-slate-200 hover:text-slate-400"
                  >
                    Equipment
                  </li>
                  <li
                    v-scroll-to="'#containerFiveOne'"
                    class="relative ml-2 cursor-pointer list before:bg-slate-200 hover:text-slate-400"
                  >
                    Content #5.1
                  </li>
                  <li
                    v-scroll-to="'#containerFiveTwo'"
                    class="relative ml-2 cursor-pointer list before:bg-slate-200 hover:text-slate-400"
                  >
                    Content #5.2
                  </li>
                  <li
                    v-scroll-to="'#containerFiveThree'"
                    class="relative ml-2 cursor-pointer list before:bg-slate-200 hover:text-slate-400"
                  >
                    Content #5.3
                  </li>
                  <li
                    v-scroll-to="'#containerFiveFour'"
                    class="relative ml-2 cursor-pointer list before:bg-slate-200 hover:text-slate-400"
                  >
                    Content #5.4
                  </li>
                </ol>
              </li>
              <li
                v-scroll-to="'#containerSix'"
                class="relative cursor-pointer list before:bg-slate-200 hover:text-slate-400"
              >
                Gameplay
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div class="flex flex-col w-72 border-x-2">
        <div class="text-center">
          <h4 class="text-base"></h4>
          <div class="py-0.5 bg-gradient-to-r from-[#101217] via-theme-100 to-[#101217]"></div>
        </div>

        <div class="flex justify-center w-full h-full">
          <img class="w-40" src="" alt="" />
        </div>
      </div>
    </section>
  </main>
  <div class="grid gap-2 m-5 text-dark-900 dark:text-light-300">
    <section class="grid">
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
        class="my-2 overflow-hidden transition-all duration-500 rounded-sm shadow-md w-52 bg-light-200 dark:bg-dark-400 hover:shadow-lg"
        :class="toggleStore.openList ? 'h-full' : 'h-10'"
      >
        <div
          class="relative z-10 flex flex-row justify-between p-2 mb-1 border-b-2 bg-light-200 dark:bg-dark-400 border-light-500 dark:border-dark-500"
        >
          <div class="flex flex-row">
            <IcRoundFormatListNumbered class="w-6 h-6" />
            <span>CONTENT</span>
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
          class="px-2 transition-all duration-300 transform"
          :class="toggleStore.openList ? 'translate-y-0' : '-translate-y-44'"
        >
          <ol class="px-5 list-decimal">
            <li
              v-scroll-to="'#gridOne'"
              class="relative cursor-pointer list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 dark:hover:text-light-500"
            >
              Content #1
            </li>
            <li
              v-scroll-to="'#gridTwo'"
              class="relative cursor-pointer list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 dark:hover:text-light-500"
            >
              Content #2
            </li>
            <li
              v-scroll-to="'#gridThree'"
              class="relative cursor-pointer list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 dark:hover:text-light-500"
            >
              Content #3
            </li>
            <li
              v-scroll-to="'#gridFour'"
              class="relative cursor-pointer list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 dark:hover:text-light-500"
            >
              Content #4
            </li>
            <li>
              <ol>
                <li
                  v-scroll-to="'#gridFive'"
                  class="relative cursor-pointer list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 dark:hover:text-light-500"
                >
                  Content #5
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
              Content #6
            </li>
          </ol>
        </div>
      </div>
    </section>
    <section class="grid"></section>
    <section class="grid">
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
</style>
