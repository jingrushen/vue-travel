<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <div class="item border-bottom">
        <h4 class="item-title">{{item.title}}</h4>
        <div class="item-price">
          ￥
          <em class="item-info-price">{{item.price}}</em>
          <span class="item-info-numword">起</span>
        </div>
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list='item.children'></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang='stylus' scoped>
  .item
    padding .1rem .2rem
    font-size .25rem
    display flex
    justify-content space-between
    line-height .4rem
    .item-title
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      flex 0 0 70%
    .item-price
      position absolute
      right .56rem
      top 50%
      height .3rem
      line-height .3rem
      color #ff9800
      font-size .1rem
      transform translateY(-50%)
      letter-spacing -.03rem
    .item-price::after
      content ''
      position absolute
      display inline-block
      width .1rem
      height .1rem
      transform rotate(-45deg)
      border .03rem solid transparent
      border-bottom-color #eee
      border-left-color #eee
      right -.3rem
      top .1rem
    .item-info-price
      font-size .4rem
      letter-spacing 0
    .item-info-numword
      color #9e9e9e
  .item-children
    padding-left .2rem
</style>
