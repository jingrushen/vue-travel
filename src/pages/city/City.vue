<template>
  <div>
    <city-header></city-header>
    <city-list :hotCities='hotCities' :cities='cities' :letter='letter'></city-list>
    <city-alphabet :cities='cities' @change='sendLetter'></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  mounted () {
    this.getCityInfo()
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
    sendLetter (letter) {
      this.letter = letter
      console.log(this.$refs)
    }
  }
}
</script>

<style lang='stylus'>
  a
    color #fff
</style>
