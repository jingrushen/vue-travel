<template>
  <div>
    <home-header></home-header>
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
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiper = data.swiperList
        this.recommend = data.recommendList
        this.icon = data.iconList2
        this.weekend = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.getHomeInfo()
      this.lastCity = this.city
    }
  },
  data () {
    return {
      lastCity: '',
      recommend: [],
      swiper: [],
      icon: [],
      weekend: []
    }
  }
}
</script>

<style lang='stylus'>
  .swiper-pagination-bullet-active
    background #fff
  a
    color #fff
</style>
