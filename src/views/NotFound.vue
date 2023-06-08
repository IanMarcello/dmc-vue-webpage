<script setup>
import { ref } from 'vue'

const mouseX = ref(0)
const mouseY = ref(0)
const width = ref(0)
const height = ref(0)
const depth1 = ref(0)
const depth2 = ref(0)
const depth3 = ref(0)
const position = ref('50% 50%')

const updateCoordinates = (e) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
  width.value = window.innerWidth / 2
  height.value = window.innerHeight / 2
  depth1.value = `${50 - (mouseX.value - width.value) * 0.01}% ${50 - (mouseY.value - height.value) * 0.01}%`
  depth2.value = `${50 - (mouseX.value - width.value) * 0.02}% ${50 - (mouseY.value - height.value) * 0.02}%`
  depth3.value = `${50 - (mouseX.value - width.value) * 0.06}% ${50 - (mouseY.value - height.value) * 0.06}%`
  position.value = `${depth3.value}, ${depth2.value}, ${depth1.value}`
}
</script>

<template>
  <div id="parallax" class="w-full h-screen relative bg-center bg-no-repeat" @mousemove="updateCoordinates" :style="{ 'background-position': position }">
    <h1>NOT FOUND</h1>
  </div>
</template>

<style>

#parallax {
  background-image: url(https://raw.githubusercontent.com/oscicen/oscicen.github.io/master/img/depth-3.png),
    url(https://raw.githubusercontent.com/oscicen/oscicen.github.io/master/img/depth-2.png),
    url(https://raw.githubusercontent.com/oscicen/oscicen.github.io/master/img/depth-1.png);
  background-position: 50% 50%;
}

h1 {
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-transform: uppercase;
  opacity: 0.7;
  font-size: 70px;
}
</style>
