<template>
  <div class='header'>
    <div class='header-left'>
      <i class="iconfont back-icon">&#xe624;</i>
    </div>
    <div class='header-input'>
      <i class="iconfont">&#xe632;</i>
      输入城市/景点/游玩
    </div>
    <router-link to="/city">
      <div class='header-right'>
        {{ city }}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
  .header
    display flex
    line-height .86rem
    background $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        display block
    .header-input
      flex 1
      background #fff
      border-radius .1rem
      margin-top .12rem
      margin-left .2rem
      height .64rem
      line-height .64rem
      color #ccc
      padding 0 .2rem
    .header-right
      width 1.24rem
      float right
      text-align center
      font-size .3rem
    .header-right:after
      content ''
      width 0
      height 0
      display inline-block
      border .13rem solid transparent
      border-top-color #fff
      position relative
      top .1rem
      border-radius .08rem
      margin-left -.05rem
</style>
