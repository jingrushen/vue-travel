<template>
  <div>
    <city-header :cities='cities' @getH='getHeaderH'></city-header>
    <city-list :hotCities='hotCities' :cities='cities' :headerH='headerH'></city-list>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CityList from './components/List'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityList
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      headerH: 0
    }
  },
  watch: {
    '$router' (to, from) {
    }
  },
  mounted () {
    this.getCityInfo()
  },
  activated () {
    // console.log('activated')
    // console.log(this.$router)
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    getHeaderH (h) {
      this.headerH = h
    }
  }
}
</script>

<style lang='stylus'>
  a
    color #fff
</style>
