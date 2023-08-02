<template>
  <section>
    <div class="py-20 4xl:flex 4xl:justify-center bg-theme-500">
      <div class="4xl:w-[2000px]">
        <div class="flex flex-col items-center justify-center">
          <div id="character" class="text-5xl font-bold">Character</div>
          <div class="w-10 mt-5 border border-theme-300"></div>
        </div>

        <div class="flex flex-row flex-wrap justify-between px-48 mt-40 gap-y-20 gap-x-5">
          <div>
            <router-link :to="{ name: 'dante' }" class="cursor-default">
              <div class="relative flex items-end justify-center card">
                <div class="wrapper absolute w-full transition-all duration-500 -z-[1]">
                  <img
                    src="@/assets/images/characters/dante/dante_potrait.webp"
                    alt="Dante Portrait"
                  />
                </div>
                <img
                  src="@/assets/images/dmc_title.webp"
                  class="w-full transition-transform duration-500 title"
                  alt="DMC 5 Title"
                />
                <img
                  src="@/assets/images/characters/dante/dante.webp"
                  class="character"
                  alt="Dante"
                />
              </div>
              <span class="text-2xl font-dmc">Dante</span>
            </router-link>
          </div>
          <div>
            <router-link :to="{ name: 'vergil' }" class="cursor-default">
              <div class="relative flex items-end justify-center card">
                <div class="wrapper absolute w-full transition-all duration-500 -z-[1]">
                  <img
                    src="@/assets/images/characters/vergil/vergil_potrait.webp"
                    alt="Vergil Potrait"
                  />
                </div>
                <img
                  src="@/assets/images/dmc_title.webp"
                  class="w-full transition-transform duration-500 title"
                  alt="DMC 5 Title"
                />
                <img
                  src="@/assets/images/characters/vergil/vergil.webp"
                  class="character"
                  alt="Vergil"
                />
              </div>
              <span class="text-2xl font-dmc">Vergil</span>
            </router-link>
          </div>
          <div>
            <router-link :to="{ name: 'nero' }" class="cursor-default">
              <div class="relative flex items-end justify-center card">
                <div class="wrapper absolute w-full transition-all duration-500 -z-[1]">
                  <img src="@/assets/images/characters/nero/nero_potrait.webp" alt="Nero Potrait" />
                </div>
                <img
                  src="@/assets/images/dmc_title.webp"
                  class="w-full transition-transform duration-500 title"
                  alt="DMC 5 Title"
                />
                <img src="@/assets/images/characters/nero/nero.webp" class="character" alt="Nero" />
              </div>
              <span class="text-2xl font-dmc">Nero</span>
            </router-link>
          </div>
          <div>
            <router-link :to="{ name: 'v' }" class="cursor-default">
              <div class="relative flex items-end justify-center card">
                <div class="wrapper absolute w-full transition-all duration-500 -z-[1]">
                  <img src="@/assets/images/characters/v/v_potrait.webp" alt="V Potrait" />
                </div>
                <img
                  src="@/assets/images/dmc_title.webp"
                  class="w-full transition-transform duration-500 title"
                  alt="DMC 5 Title"
                />
                <img src="@/assets/images/characters/v/v.webp" class="character" alt="V" />
              </div>
              <span class="text-2xl font-dmc">V</span>
            </router-link>
          </div>
          <div>
            <router-link :to="{ name: 'trish' }" class="cursor-default">
              <div class="relative flex items-end justify-center card">
                <div class="wrapper absolute w-full transition-all duration-500 -z-[1]">
                  <img
                    src="@/assets/images/characters/trish/trish_potrait.webp"
                    alt="Trish Potrait"
                  />
                </div>
                <img
                  src="@/assets/images/dmc_title.webp"
                  class="w-full transition-transform duration-500 title"
                  alt="DMC 5 Title"
                />
                <img
                  src="@/assets/images/characters/trish/trish.webp"
                  class="character"
                  alt="Trish"
                />
              </div>
              <span class="text-2xl font-dmc">Trish</span>
            </router-link>
          </div>
          <div>
            <router-link :to="{ name: 'lady' }" class="cursor-default">
              <div class="relative flex items-end justify-center card">
                <div class="wrapper absolute w-full transition-all duration-500 -z-[1]">
                  <img src="@/assets/images/characters/lady/lady_potrait.webp" alt="Lady Potrait" />
                </div>
                <img
                  src="@/assets/images/dmc_title.webp"
                  class="w-full transition-transform duration-500 title"
                  alt="DMC 5 Title"
                />
                <img src="@/assets/images/characters/lady/lady.webp" class="character" alt="Lady" />
              </div>
              <span class="text-2xl font-dmc">Lady</span>
            </router-link>
          </div>
          <div>
            <router-link :to="{ name: 'nico' }" class="cursor-default">
              <div class="relative flex items-end justify-center card">
                <div class="wrapper absolute w-full transition-all duration-500 -z-[1]">
                  <img src="@/assets/images/characters/nico/nico_potrait.webp" alt="Nico Potrait" />
                </div>
                <img
                  src="@/assets/images/dmc_title.webp"
                  class="w-full transition-transform duration-500 title"
                  alt="DMC 5 Title"
                />
                <img src="@/assets/images/characters/nico/nico.webp" class="character" alt="Nico" />
              </div>
              <span class="text-2xl font-dmc">Nico</span>
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
