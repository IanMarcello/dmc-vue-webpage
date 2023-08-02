<script setup>
import IcBaselineDiscord from '~icons/ic/baseline-discord'
import MdiGithub from '~icons/mdi/github'
import MdiTwitter from '~icons/mdi/twitter'
import MdiLinkedin from '~icons/mdi/linkedin'
</script>

<template>
  <div class="flex relative gap-x-5 -top-[85px] -left-5 py-2 px-4 bg-theme-500 w-fit">
    <div>
      <a
        href="https://www.linkedin.com/in/ian-jada-51886a1a3"
        target="_blank"
        class="transition-colors hover:text-red-600"
        ><MdiLinkedin class="w-6 h-6"
      /></a>
    </div>
    <div>
      <a
        href="https://discord.gg/GxF3YwWUAC"
        target="_blank"
        class="transition-colors hover:text-red-600"
        ><IcBaselineDiscord class="w-6 h-6"
      /></a>
    </div>
    <div>
      <a
        href="https://github.com/IanMarcello"
        target="_blank"
        class="transition-colors hover:text-red-600"
        ><MdiGithub class="w-6 h-6"
      /></a>
    </div>
    <div>
      <a
        href="https://twitter.com/ian_jada"
        target="_blank"
        class="transition-colors hover:text-red-600"
        ><MdiTwitter class="w-6 h-6"
      /></a>
    </div>
  </div>
</template>
