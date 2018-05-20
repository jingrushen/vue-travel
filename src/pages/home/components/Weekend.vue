<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for='item of weekend' :key='item.id'>
        <div class="img-wrapper">
          <img class='item-img' :src="item.imgUrl">
        </div>
        <div class="item-info">
          <h4 class="item-title">{{item.title}}</h4>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    weekend: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .6rem
    background #eee
    text-indent .2rem
  .img-wrapper
    height 0
    padding-bottom 38.7%
  .item-img
    width 100%
  .item-info
    padding .1rem .2rem
    .item-title
      font-size .28rem
      line-height .54rem
      color #555
      font-weight 600
      ellipsis()
    .item-desc
      line-height .4rem
      max-height .8rem
      color #888
      font-size .2rem
      overflow hidden
      position relative
      ellipsis()
    .item-btn
      background #ff9300
      padding 0 .1rem
      border-radius .06rem
      color #fff
</style>
