import Vue from 'vue'
import home from '@/views/home'

describe('home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(home)
    const vm = new Constructor().$mount()
    expect(vm.$el.nodeName)
      .to.equal('P')
  })
})
