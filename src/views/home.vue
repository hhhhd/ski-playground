<template>
  <p>Ski Playground</p>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

// you need [ski]npm run dev:start && [ski-playground]npm link ski-ui first
/* eslint import/no-extraneous-dependencies: 0 */
import { button } from 'ski-ui'

@Component({
  props: {
    value: String,
  },
  components: {
    's-button': button
  }
})
export default class Me extends Vue {
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

<style lang="less">
p {
  font-size: 99px;
}
</style>
