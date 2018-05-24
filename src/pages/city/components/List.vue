<template>
  <div class="list"  ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <ul class="button-list">
          <li class="button-wraper">
            <a class="button">{{this.city}}</a>
          </li>
        </ul>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <ul class="button-list">
          <li class="button-wraper"  v-for='item of hotCities' :key='item.id' @click='clickCity(item.name)'>
            <a class="button">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div class="area"  v-for='(item, key) of cities' :key='key' :ref='key'>
        <div class="title border-topbottom">{{ key }}</div>
        <ul class="item-list">
          <li class="item border-bottom" v-for='list of item' :key='list.id'  @click='clickCity(list.name)'>
            <a>{{ list.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <city-alphabet :cities='cities' :headerH='headerH' @change='changeLetter' :currLetter='currLetter'></city-alphabet>
  </div>
</template>

<script>
import CityAlphabet from './Alphabet'
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  name: 'CityList',
  data () {
    return {
      scroll1: {},
      scrollY: 0,
      listGroup: [],
      listY: [],
      currIndex: 0,
      currLetter: 'A'
    }
  },
  components: {
    CityAlphabet
  },
  activated () {
    let _t = this
    this.scroll1.refresh()
    this.scroll1.on('scroll', function (pos) {
      _t.scrollY = pos.y
    })
  },
  mounted () {
    this.scroll1 = new BScroll(this.$refs.wrapper, {
      probeType: 3
    })
  },
  props: {
    hotCities: Array,
    cities: Object,
    headerH: Number
  },
  computed: {
    ...mapState(['city'])
  },
  watch: {
    cities () {
      this.listGroup = Object.keys(this.cities)
      this.$nextTick(function () {
        let _t = this
        this.listGroup.forEach(function (item) {
          _t.listY.push(_t.$refs[item][0].offsetTop)
        })
        _t.listY.push(_t.$refs['Z'][0].offsetTop + _t.$refs['Z'][0].offsetHeight)
      })
    },
    scrollY (y) {
      requestAnimationFrame(() => {
        if (y >= 0) {
          this.currIndex = 0
        } else {
          y = Math.abs(y)
          let len = this.listY.length
          for (let i = 1; i < len; i++) {
            if (this.listY[i - 1] <= y && y < this.listY[i]) {
              this.currIndex = i - 1
              break
            }
          }
        }
        this.currLetter = this.listGroup[this.currIndex]
      })
    }
  },
  methods: {
    clickCity (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    },
    changeLetter (l) {
      const el = this.$refs[l][0]
      if (this.scroll1 && el) {
        this.scroll1.scrollToElement(el)
        this.currLetter = l
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
  a
    display block
    color #333
  .border-topbottom
    &:after
      border-color #ccc
    &:before
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    position absolute
    overflow hidden
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .44rem
      background #eee
      padding-left .2rem
      color #666
      font-size .2rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wraper
        float left
        width 33.3%
        .button
          text-align center
          padding .1rem 0
          border .02rem solid #ccc
          margin .1rem
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        padding-left .2rem
</style>
