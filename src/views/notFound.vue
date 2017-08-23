<template>
  <h1>404</h1>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    value: String,
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
