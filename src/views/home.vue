<template>
  <p>
    Ski Playground 
    <s-button>我是文字</s-button>
  </p>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

// you need [ski]yarn link && [ski-playground]yarn link ski-ui
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
  checked = 1

  change() {
    setTimeout(() => {
      this.checked = !this.checked
    }, 0)
  }
}
</script>

<style lang="less">
p {
  font-size: 99px;
}
</style>
