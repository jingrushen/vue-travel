<template>
  <div class='wrapper'>
    <swiper :options="swiperOption">
      <swiper-slide v-for='item of imgList' :key='item.id'>
        <img :src='item.url' class='swiper-img' />
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
      imgList: [
        {
          id: '0001',
          url: 'https://img1.qunarzz.com/vc/af/f4/45/4756cd165e1462610598ceb201.png'
        },
        {
          id: '0002',
          url: 'https://img1.qunarzz.com/vc/31/cc/75/3c014d49de263aea6bf9bffeda.png'
        },
        {
          id: '0003',
          url: 'https://img1.qunarzz.com/vc/29/31/b4/20fb7d1ad6e24362882319cbfb.jpg_750x388x92.jpg'
        }
      ],
      swiperOption: {
        autoplay: {
          duration: 3000,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 51.7%
    .swiper-img
      width 100%
      background-color #eee
</style>
