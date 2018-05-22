<template>
  <div>
    <div class="search">
      <input type="text" class="search-input" placeholder="输入城市名或拼音" v-model='keyword'>
    </div>
    <div class="search-content" ref="wrapper" v-show='keyword'>
      <ul class="search-list">
        <li class="search-item border-bottom" v-for='item of list' :key='item.id'  @click='clickCity(item.name)'>
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show='hasNoData'>没有找到匹配项</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null,
      scroll,
      hasNoData: false
    }
  },
  props: {
    cities: Object
  },
  methods: {
    clickCity (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    keyword () {
      if (!this.keyword) {
        this.list = []
        return
      }
      let result = []
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        for (let key in this.cities) {
          this.cities[key].forEach((item) => {
            if (item.name.indexOf(this.keyword) > -1 || item.spell.indexOf(this.keyword) > -1) {
              result.push(item)
            }
          })
        }
        this.list = result
        this.hasNoData = !this.list.length
      }, 100)
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .search
    height .72rem
    background $bgColor
    padding 0 .1rem
    .search-input
      box-sizing border-box
      height .62rem
      line-height .62rem
      width 100%
      text-align center
      border-radius .06rem
      padding 0 .1rem
      color #666
  .search-content
    z-index 1
    position absolute
    top 1.58rem
    left 0
    bottom 0
    right 0
    overflow hidden
    background #eee
    .search-item
      line-height .62rem
      background #fff
      color #666
      padding-left .2rem
</style>
