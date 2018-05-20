<template>
  <div>
    <home-header :city='city'></home-header>
    <home-swiper :swiper='swiper'></home-swiper>
    <home-icons :icon='icon'></home-icons>
    <home-recommend :recommend='recommend'></home-recommend>
    <home-weekend :weekend='weekend'></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiper = data.swiperList
        this.recommend = data.recommendList
        this.icon = data.iconList2
        this.weekend = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  data () {
    return {
      city: '',
      recommend: [],
      swiper: [],
      icon: [],
      weekend: []
    }
  }
}
</script>

<style>
  .swiper-pagination-bullet-active {
    background: #fff
  }
</style>
