<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <h3 class="header">
        <span class="header-icon"></span>
        门票
      </h3>
      <detail-list :list='list'></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [
        {
          title: 'cchengreniacchengreniacchengrenianiacchengrenianiacchengrenia',
          price: 112,
          children: [
            {
              title: 'hello',
              price: 50
            }
          ]
        },
        {
          title: '瀑布',
          price: 112
        },
        {
          title: 'cchengrenia',
          price: 112
        },
        {
          title: 'cchengrenia',
          price: 112
        }
      ]
    }
  },
  activated () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang='stylus' scoped>
  .header
    height .88rem
    padding 0 .2rem
    background #fff
    line-height .88rem
    vertical-align middle
    font-size .32rem
    .header-icon
      position relative
      top .08rem
      left .1rem
      display: inline-block
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
</style>
