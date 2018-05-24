<template>
  <div>
    <div class="banner" @click='showG'>
      <img src="https://ugc.qunarzz.com/9/d3140831.jpg_r_1500x_77408ef6.jpg" alt="" class="banner-img">
      <div class="banner-info">
        <p class="info-title">大连圣亚海洋世界</p>
        <div class='info-num'>
          <icon name='image' class="info-icon"></icon>
          39
        </div>
      </div>
    </div>
    <transition
      enter-active-class='animated zoomIn'
      leave-active-class='animated zoomOut'
    >
      <common-gallary :imgs='imgs' v-if='showGallary' @cancel='closeG'></common-gallary>
    </transition>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      imgs: ['https://ugc.qunarzz.com/9/d3140831.jpg_r_1500x_77408ef6.jpg',
        'https://ugc.qunarzz.com/9/d3140831.jpg_r_1500x_77408ef6.jpg'],
      showGallary: false
    }
  },
  methods: {
    showG () {
      this.showGallary = true
      window.addEventListener('mousewheel', this.forbidScroll)
      window.addEventListener('touchmove', this.forbidScroll, {passive: false})
    },
    closeG () {
      this.showGallary = false
      window.removeEventListener('mousewheel', this.forbidScroll)
      window.removeEventListener('touchmove', this.forbidScroll, {passive: false})
    },
    forbidScroll (e) {
      e.preventDefault()
      e.returnValue = false
      e.stopPropagation()
      return false
    }
  }
}
</script>

<style lang='stylus' scoped>
  .animated
    animation-duration .2s
  .banner
    overflow hidden
    height 0
    padding-bottom 64%
    position relative
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      color #fff
      .info-title
        flex 1
        font-size .25rem
        padding 0 .2rem
      .info-num
        margin-top .15rem
        margin-right .1rem
        padding 0 .3rem
        height .3rem
        line-height .3rem
        background rgba(0, 0, 0, .8)
        border-radius .2rem
        font-size .22rem
        .info-icon
          width auto
          height .25rem
          vertical-align text-bottom
</style>
