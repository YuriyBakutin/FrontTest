<template>
  <div style="width=100vh; height=100vh" class="container">
    <div class="imgEnvelope">
      <img src="../images/rollup_logo_.png" class="logo" alt="Rollup">
    </div>
    <div class="imgEnvelope">
      <img src="../images/vue_logo_.png" class="logo" alt="Vue">
    </div>
    <div class="imgEnvelope">
      <img src="../images/ts_logo_.png" class="logo" alt="TS">
    </div>
    <div v-if="!moduleLoaded">
      <button v-on:click="buttonClick">Загрузить модуль динамически</button>
    </div>
    <div v-if="moduleLoaded">
      <img src="../images/robot_.png" class="robot">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

let methods: any = {}

@Component
export default class ModuleLoader extends Vue {

  private robot_src: string = null
  private moduleLoaded = false

  async buttonClick(): Promise<void> {
    if (!this.moduleLoaded) {
      let {robot_img_url} = await import('../modules/getRobot')
      this.robot_src = robot_img_url
      this.moduleLoaded = true
    }
  }
}
</script>
<style lang="scss" scoped="true">
%flexRowEnvelope {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
}
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
  width: 100%;
  height: 50vh;
}
.logo {
  max-width:128px;
  max-height: 128px;
  min-width:32px;
  min-height: 32px;
  object-fit: cover;
}
.robot {
  max-width:256px;
  max-height: 256px;
  min-width: 64px;
  min-height: 64px;
  object-fit: cover;
}
button {
  border-radius: 6px;
  border: none;
  padding: 10px;
  background-color: rgb(182, 182, 182);
}
</style>
