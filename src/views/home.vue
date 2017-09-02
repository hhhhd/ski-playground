<template>
  <p>
    Ski Playground 
    <s-switching v-model="isChange"></s-switching>
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
  isChange = true
  aaa() {
    console.log(this.isChange)
  }
}
</script>

<style lang="less">
p {
  font-size: 99px;
}
</style>
