<template>
  <p>
    Ski Playground
    <s-switching></s-switching>
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
}
</script>

<style lang="less">
p {
  font-size: 99px;
}
</style>
