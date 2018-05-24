<template>
  <div class="container" @click='cancelG'>
    <div class="wrapper">
      <swiper :options='swiperOptions'>
        <swiper-slide v-for='(item, index) in imgs' :key='index'>
          <img :src="item" class="gallary-img">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    cancelG () {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang='stylus' scoped>
  .wrapper >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    background #000
    z-index 99
    overflow hidden
    .wrapper
      width 100%
      .gallary-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem
        font-size .2rem
</style>
