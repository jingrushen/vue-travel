<template>
  <div class='wrapper'>
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for='item of swiper' :key='item.id'>
        <img :src='item.imgUrl' class='swiper-img' />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        autoplay: {
          duration: 3000,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  props: {
    swiper: Array
  },
  computed: {
    showSwiper () {
      return this.swiper.length
    }
  }
}
</script>

<style lang='stylus' scoped>
  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 31.4%
    .swiper-img
      width 100%
      background-color #eee
</style>
