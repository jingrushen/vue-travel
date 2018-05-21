<template>
  <ul class="list">
    <li
      class="item"
      v-for='(item, key) of cities'
      :key='key'
      :ref='key'
      @click='sendLetter'
      @touchstart='handleTouchStart'
      @touchmove='handleTouchMove'
      @touchend='handleTouchEnd'
    >{{ key }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touched: false
    }
  },
  computed: {
    letters () {
      let letters = []
      if (this.$refs) {
        letters = Object.keys(this.$refs)
      }
      return letters
    }
  },
  methods: {
    sendLetter (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart (e) {
      this.touched = true
    },
    handleTouchMove (e) {
      // const initY = this.$refs['A'][0].offsetTop
      // const touchY = e.touches[0].clientY
    },
    handleTouchEnd (e) {
      this.touched = false
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem
    .item
      text-align center
      line-height .32rem
      color $bgColor
      font-size .23rem
</style>
