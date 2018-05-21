<template>
  <div class="wrapper" ref="wrapper">
    <div class='header'>
      城市选择
      <router-link to="/">
        <div class='header-left'>
          <i class="iconfont back-icon">&#xe624;</i>
        </div>
      </router-link>
    </div>
    <city-search></city-search>
  </div>

</template>

<script>
import CitySearch from './Search'
export default {
  name: 'CityHeader',
  props: {
    city: String
  },
  components: {
    CitySearch
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
  .header
    height .86rem
    line-height .86rem
    background $bgColor
    color #fff
    text-align center
    position relative
    .header-left
      width .64rem
      position absolute
      left 0
      top 0
      .back-icon
        text-align center
        display block
</style>
