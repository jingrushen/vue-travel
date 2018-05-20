<template>
  <div class="list"  ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <ul class="button-list">
          <li class="button-wraper">
            <a class="button">北京</a>
          </li>
        </ul>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <ul class="button-list">
          <li class="button-wraper"  v-for='item of hotCities' :key='item.id'>
            <a class="button">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div class="area"  v-for='(item, key) of cities' :key='key'>
        <div class="title border-topbottom">{{ key }}</div>
        <ul class="item-list">
          <li class="item border-bottom" v-for='list of item' :key='list.id'>
            <a href="">{{ list.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  props: {
    hotCities: {
      type: Array
    },
    cities: {
      type: Object
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
