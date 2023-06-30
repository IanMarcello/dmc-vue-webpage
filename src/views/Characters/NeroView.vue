<script setup>
import IcRoundFormatListNumbered from '~icons/ic/round-format-list-numbered'
import IcRoundExpandMore from '~icons/ic/round-expand-more'
import { useToggleStore } from '@/stores/state'

const toggleStore = useToggleStore()
</script>

<template>
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
        class="m-2 overflow-hidden transition-all duration-500 rounded-sm shadow-md w-52 bg-light-200 dark:bg-dark-400 hover:shadow-lg"
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
    <section class="grid">
      <div class="flex flex-wrap items-center mb-5">
        <div class="w-full md:w-1/2">
          <h4 class="mb-3 text-3xl font-bold glitch-noise" data-glitch-noise="Nero">Nero</h4>
          <p class="mb-8 dark:text-light-500">
            One of the main protagonists of the Devil May Cry franchise. He first appeared as a
            playable character in Devil May Cry 4, and later in Devil May Cry 5. He was raised in
            Fortuna and served as a Holy Knight in the Order of the Sword, a religious group that
            worships Sparda and fights to protect the world from demons. It is later revealed that
            he is the son of Vergil, nephew of Legendary Devil Hunter Dante, and grandson of
            Legendary Dark Knight Sparda.
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <img
            src="@/assets/images/content/nero.webp"
            class="block mx-auto md:mr-auto md:ml-0"
            alt="Nero"
          />
        </div>
      </div>
    </section>
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


