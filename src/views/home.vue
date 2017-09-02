<template>
  <p>
    Ski Playground
    <s-switching v-model="isOn"></s-switching>
    <button @click="aaa"></button>
  </p>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

// you need [ski]yarn link && [ski-playground]yarn link ski-ui
/* eslint import/no-extraneous-dependencies: 0 */
import { switching } from 'ski-ui'

@Component({
  props: {
    value: String,
  },
  components: {
    's-switching': switching
  }
})
export default class Me extends Vue {
  isOn = null
  aaa() {
    console.log(this.isOn)
  }
}
</script>

<style lang="less">
p {
  font-size: 99px;
}
</style>
