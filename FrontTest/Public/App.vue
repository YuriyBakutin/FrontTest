<template>
  <div>
    <ModuleLoader />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ModuleLoader from './components/ModuleLoader.vue'

@Component( {
  components: {
    ModuleLoader
  },
} )

export default class App extends Vue {}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>
