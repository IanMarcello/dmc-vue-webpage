<script setup>
import IcBaselineDiscord from '~icons/ic/baseline-discord'
import MdiGithub from '~icons/mdi/github'
import MdiTwitter from '~icons/mdi/twitter'
import MdiLinkedin from '~icons/mdi/linkedin'
</script>

<template>
  <div class="flex relative gap-x-5 -top-[85px] -left-5 py-2 px-4 bg-[#16191f] w-fit">
    <div>
      <a href="#" class="transition-colors hover:text-red-600" target="_blank"
        ><MdiLinkedin class="w-6 h-6"
      /></a>
    </div>
    <div>
      <a href="#" class="transition-colors hover:text-red-600" target="_blank"
        ><IcBaselineDiscord class="w-6 h-6"
      /></a>
    </div>
    <div>
      <a href="#" class="transition-colors hover:text-red-600" target="_blank"
        ><MdiGithub class="w-6 h-6"
      /></a>
    </div>
    <div>
      <a href="#" class="transition-colors hover:text-red-600" target="_blank"
        ><MdiTwitter class="w-6 h-6"
      /></a>
    </div>
  </div>
</template>
