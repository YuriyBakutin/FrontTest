<template>
  <div class="App_vue">
    <Calendar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import ModuleLoader from './components/ModuleLoader.vue'
import Calendar from './components/DemoApp.vue'

@Component( {
  components: {
    // ModuleLoader,
    Calendar,
  },
} )

export default class App extends Vue {}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.App_vue {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100%;
  overflow: auto;
  width: 100%;
}
</style>
