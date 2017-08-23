<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
  msg = '123'

  mounted() {
    this.msg = 456
    this.createHook()
  }

  get computedMsg() {
    return `computed ${this.msg}`
  }

  async createHook() {
    await console.log(`hook created for ${this.msg}!`)
  }
}
</script>
