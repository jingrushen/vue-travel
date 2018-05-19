<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for='item of recommendList' :key='item.id'>
        <img class='item-img' :src="item.url">
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
  data () {
    return {
      recommendList: [
        {
          id: '001',
          url: 'https://imgs.qunarzz.com/p/p48/201302/28/e9603bf3a8f7fbfd93835fbb.jpg_190x250_8ff2d7c9.jpg',
          title: '大连美丽的景色呀好美丽呀',
          desc: '大连美丽的景色呀好美丽呀大连美丽的景色呀好美丽呀大连美丽的景色呀好美丽呀'
        },
        {
          id: '002',
          url: 'https://imgs.qunarzz.com/p/p48/201302/28/e9603bf3a8f7fbfd93835fbb.jpg_190x250_8ff2d7c9.jpg',
          title: '大连美丽的景色呀好美丽呀',
          desc: '大连美丽的景色呀好美丽呀大连美丽的景色呀好美丽呀大连美丽的景色呀好美丽呀'
        },
        {
          id: '003',
          url: 'https://imgs.qunarzz.com/p/p48/201302/28/e9603bf3a8f7fbfd93835fbb.jpg_190x250_8ff2d7c9.jpg',
          title: '大连美丽的景色呀好美丽呀',
          desc: '大连美丽的景色呀好美丽呀大连美丽的景色呀好美丽呀大连美丽的景色呀好美丽呀'
        },
        {
          id: '004',
          url: 'https://imgs.qunarzz.com/p/p48/201302/28/e9603bf3a8f7fbfd93835fbb.jpg_190x250_8ff2d7c9.jpg',
          title: '大连美丽的景色呀好美丽呀',
          desc: '大连美丽的景色呀好美丽呀大连美丽的景色呀好美丽呀大连美丽的景色呀好美丽呀'
        }
      ]
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
      .item-title
        font-size .28rem
        line-height .54rem
        color #555
        ellipsis()
      .item-desc
        line-height .4rem
        max-height .8rem
        color #888
        font-size .2rem
        overflow hidden
        position relative
      .item-desc:after
        textellipsis()
      .item-btn
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        color #fff
</style>
