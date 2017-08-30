<template>
  <p>
    Ski Playground
    <s-input></s-input>
    <s-button>登录</s-button>
    <s-button>返回</s-button>
  </p>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

// you need [ski]yarn link && [ski-playground]yarn link ski-ui
/* eslint import/no-extraneous-dependencies: 0 */
import { button, input } from 'ski-ui'

@Component({
  props: {
    value: String,
  },
  components: {
    's-button': button,
    's-input': input
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
