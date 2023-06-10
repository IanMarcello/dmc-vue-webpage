<template>
  <section>
    <div class="w-full 4xl:flex 4xl:justify-center bg-[#16191f] py-20">
      <div class="4xl:w-[2000px]">
        <div class="flex flex-col justify-center items-center">
          <div id="character" class="font-bold text-5xl">Character</div>
          <div class="border border-[#2d3035] mt-5 w-10"></div>
        </div>

        <div class="mt-40 flex flex-wrap gap-y-20 gap-x-5 flex-row justify-between px-48">
          <div>
            <router-link :to="{ name: 'dante' }" class="cursor-default">
              <div class="card h-full flex justify-center relative items-end">
                <div class="wrapper absolute w-full transition-all duration-500 -z-[1]">
                  <img
                    src="@/assets/images/characters/dante/dante_potrait.jpg"
                    class="h-full w-full object-cover"
                  />
                </div>
                <img src="@/assets/images/dmc_title.png" class="title" />
                <img src="@/assets/images/characters/dante/dante.png" class="character" />
              </div>
              <span class="font-dmc text-2xl">Dante</span>
            </router-link>
          </div>
          <div>
            <router-link :to="{ name: 'vergil' }" class="cursor-default">
              <div class="card h-full flex justify-center relative items-end">
                <div class="wrapper absolute w-full transition-all duration-500 -z-[1]">
                  <img
                    src="@/assets/images/characters/vergil/vergil_potrait.jpg"
                    class="h-full w-full object-cover"
                  />
                </div>
                <img src="@/assets/images/dmc_title.png" class="title" />
                <img src="@/assets/images/characters/vergil/vergil.png" class="character" />
              </div>
              <span class="font-dmc text-2xl">Vergil</span>
            </router-link>
          </div>
          <div>
            <router-link :to="{ name: 'nero' }" class="cursor-default">
              <div class="card h-full flex justify-center relative items-end">
                <div class="wrapper absolute w-full transition-all duration-500 -z-[1]">
                  <img
                    src="@/assets/images/characters/nero/nero_potrait.jpg"
                    class="h-full w-full object-cover"
                  />
                </div>
                <img src="@/assets/images/dmc_title.png" class="title" />
                <img src="@/assets/images/characters/nero/nero.png" class="character" />
              </div>
              <span class="font-dmc text-2xl">Nero</span>
            </router-link>
          </div>
          <div>
            <router-link :to="{ name: 'v' }" class="cursor-default">
              <div class="card h-full flex justify-center relative items-end">
                <div class="wrapper absolute w-full transition-all duration-500 -z-[1]">
                  <img
                    src="@/assets/images/characters/v/v_potrait.jpg"
                    class="h-full w-full object-cover"
                  />
                </div>
                <img src="@/assets/images/dmc_title.png" class="title" />
                <img src="@/assets/images/characters/v/v.png" class="character" />
              </div>
              <span class="font-dmc text-2xl">V</span>
            </router-link>
          </div>
          <div>
            <router-link :to="{ name: 'trish' }" class="cursor-default">
              <div class="card h-full flex justify-center relative items-end">
                <div class="wrapper absolute w-full transition-all duration-500 -z-[1]">
                  <img
                    src="@/assets/images/characters/trish/trish_potrait.jpg"
                    class="h-full w-full object-cover"
                  />
                </div>
                <img src="@/assets/images/dmc_title.png" class="title" />
                <img src="@/assets/images/characters/trish/trish.png" class="character" />
              </div>
              <span class="font-dmc text-2xl">Trish</span>
            </router-link>
          </div>
          <div>
            <router-link :to="{ name: 'lady' }" class="cursor-default">
              <div class="card h-full flex justify-center relative items-end">
                <div class="wrapper absolute w-full transition-all duration-500 -z-[1]">
                  <img
                    src="@/assets/images/characters/lady/lady_potrait.jpg"
                    class="h-full w-full object-cover"
                  />
                </div>
                <img src="@/assets/images/dmc_title.png" class="title" />
                <img src="@/assets/images/characters/lady/lady.png" class="character" />
              </div>
              <span class="font-dmc text-2xl">Lady</span>
            </router-link>
          </div>
          <div>
            <router-link :to="{ name: 'nico' }" class="cursor-default">
              <div class="card h-full flex justify-center relative items-end">
                <div class="wrapper absolute w-full transition-all duration-500 -z-[1]">
                  <img
                    src="@/assets/images/characters/nico/nico_potrait.jpg"
                    class="h-full w-full object-cover"
                  />
                </div>
                <img src="@/assets/images/dmc_title.png" class="title" />
                <img src="@/assets/images/characters/nico/nico.png" class="character" />
              </div>
              <span class="font-dmc text-2xl">Nico</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
:root {
  --card-height: 300px;
  --card-width: calc(var(--card-height) / 1.5);
}

.card {
  width: var(--card-width);
  height: var(--card-height);
  padding: 0 36px;
  perspective: 250000px;
}

.card:hover .wrapper {
  transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
  box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
}

.wrapper::before,
.wrapper::after {
  content: '';
  opacity: 0;
  width: 100%;
  height: 80px;
  transition: all 0.5s;
  position: absolute;
  left: 0;
}
.wrapper::before {
  top: 0;
  height: 100%;
  background-image: linear-gradient(
    to top,
    transparent 46%,
    rgba(12, 13, 19, 0.5) 68%,
    rgba(12, 13, 19) 97%
  );
}
.wrapper::after {
  bottom: 0;
  opacity: 1;
  background-image: linear-gradient(
    to bottom,
    transparent 46%,
    rgba(12, 13, 19, 0.5) 68%,
    rgba(12, 13, 19) 97%
  );
}

.card:hover .wrapper::before,
.wrapper::after {
  opacity: 1;
}

.card:hover .wrapper::after {
  height: 120px;
}
.title {
  width: 100%;
  transition: transform 0.5s;
}
.card:hover .title {
  transform: translate3d(0%, -50px, 100px);
}

.character {
  width: 100%;
  opacity: 0;
  transition: all 0.5s;
  position: absolute;
  z-index: -1;
}

.card:hover .character {
  opacity: 1;
  transform: translate3d(0%, -8%, 100px);
}
</style>
