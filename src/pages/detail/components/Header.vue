<template>
  <div>
    <router-link
      class="header-abs"
      tag='div'
      to='/'
    >
      <i class="iconfont abs-back-icon">&#xe624;</i>
    </router-link>
    <div class="header-fixed" ref="headerfix" :style="opacityStyle">
      <div class='header-left'>
        <router-link
          class="iconfont fixed-back-icon"
          tag='i'
          to='/'
        >&#xe624;</router-link>
      </div>
        景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      fixHeight: 0,
      opacityStyle: {
        opacity: 0
      },
      showAbs: false
    }
  },
  methods: {
    scroll () {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      const o = top / this.fixHeight
      const opacity = o > 1 ? 1 : o
      this.opacityStyle = {
        opacity
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.scroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.scroll)
  },
  mounted () {
    this.fixHeight = this.$refs.headerfix.offsetHeight
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
  .header-abs
    position fixed
    top .2rem
    left .2rem
    width .6rem
    height .6rem
    border-radius .3rem
    background rgba(0, 0, 0, .8)
    text-align center
    line-height .6rem
    .abs-back-icon
      color #fff
  .header-fixed
    line-height .86rem
    width 100%
    background $bgColor
    color #fff
    text-align center
    position fixed
    top 0
    left 0
    .header-left
      position absolute
      top .2rem
      left .2rem
      width .6rem
      height .6rem
      text-align center
      line-height .6rem
      .fixed-back-icon
        color #fff
</style>
