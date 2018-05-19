<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for='item of recommendList' :key='item.id'>
        <div class="img-wrapper">
          <img class='item-img' :src="item.url">
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
  data () {
    return {
      recommendList: [
        {
          id: '001',
          url: 'http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
          title: '温泉有水上乐园',
          desc: '泡泡温泉，吹吹海风，深觉人生,泡泡温泉，吹吹海风，深觉人生，这是'
        },
        {
          id: '002',
          url: 'http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
          title: '温泉有水上乐园',
          desc: '泡泡温泉，吹吹海风，深觉人生'
        },
        {
          id: '003',
          url: 'http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
          title: '温泉有水上乐园',
          desc: '泡泡温泉，吹吹海风，深觉人生'
        },
        {
          id: '004',
          url: 'http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
          title: '温泉有水上乐园',
          desc: '泡泡温泉，吹吹海风，深觉人生'
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
