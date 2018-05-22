<template>
  <div>
    <ul class="list">
      <li
        v-for='(item, key) of cities'
        :class='["item", {"current": currLetter === key}]'
        :key='key'
        :ref='key'
        @click='sendLetter'
        @touchstart='handleTouchStart'
        @touchmove='handleTouchMove'
        @touchend='handleTouchEnd'
      >{{ key }}</li>
    </ul>
    <transition name='fade'>
      <div class="showWord"
        v-show="touched"
      >{{ currLetter }}</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object,
    headerH: Number,
    currLetter: String
  },
  data () {
    return {
      touched: false,
      timer: null,
      ticking: false
    }
  },
  computed: {
    letters () {
      let result = []
      if (this.$refs) {
        result = Object.keys(this.$refs)
      }
      return result
    }
  },
  methods: {
    sendLetter (e) {
      requestAnimationFrame(() => {
        this.$emit('change', e.target.innerText)
      })
    },
    handleTouchStart (e) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.touched = true
      }, 300)
    },
    handleTouchMove (e) {
      if (!this.ticking) {
        requestAnimationFrame(() => {
          const initY = this.$refs['A'][0].offsetTop
          const letterH = this.$refs['A'][0].offsetHeight
          const touchY = e.touches[0].clientY - this.headerH
          let index = Math.floor((touchY - initY) / letterH)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
          this.ticking = false
        })
        this.ticking = true
      }
    },
    handleTouchEnd (e) {
      setTimeout(() => {
        this.touched = false
      }, 300)
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
    left 6rem
    top 0
    bottom 0
    width .4rem
    .item
      text-align center
      line-height .32rem
      color $bgColor
      font-size .23rem
    .current
      margin-left .05rem
      width .32rem
      height .32rem
      background $bgColor
      color #fff
      border-radius .2rem
  .showWord
    width 1.5rem
    height 1.5rem
    line-height 1.5rem
    background $bgColor
    border-radius 1.5rem
    position fixed
    margin auto
    left 0
    right 0
    top 0
    bottom 0
    text-align center
    color #fff
    font-size 30px
  .fade-leave-active
    transition opacity 1s
  .fade-enter
    opacity 1
  .fade-leave-to
    opacity 0
</style>
