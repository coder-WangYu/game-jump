/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-05 14:56:25
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-05 14:56:25
 * @Description: 主入口
 */
<template>
  <div id="game-box"></div>
</template>

<script setup>
import { onMounted } from "vue"
import { useInit } from "./init/useInit";

onMounted(() => {
  const GAME_BOX = document.getElementById("game-box")

  // 初始化场景
  useInit(GAME_BOX)
})
</script>

<style>
#game-box {
  position: absolute;
  width: 100vw;
  height: 100vh;
}
</style>
