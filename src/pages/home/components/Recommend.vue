<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for='item of recommend' :key='item.id'>
        <img class='item-img' :src="item.imgUrl">
        <div class="item-info">
          <h4 class="item-title">{{item.title}}</h4>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommend: Array
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
  .item
    display flex
    height 1.9rem
    .item-img
      height 1.7rem
      width 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      overflow hidden
      .item-title
        font-size .28rem
        line-height .54rem
        color #555
        ellipsis()
      .item-desc
        line-height .4rem
        min-height .8rem
        color #888
        font-size .2rem
        overflow hidden
      .item-btn
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        color #fff
</style>
