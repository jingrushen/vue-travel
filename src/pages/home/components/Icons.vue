<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for='(page, index) of pages' :key='index'>
        <ul class="icon">
          <li class="icon-item"  v-for='item of page' :key='item.id'>
            <a href="" class="icon-list">
              <i :class="[imgClass,item.class]"></i>
              <p class="icon-desc">{{item.desc}}</p>
            </a>
          </li>
        </ul>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  data () {
    return {
      imgClass: 'icon-img'
    }
  },
  props: {
    icon: {
      type: Array
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icon.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0;
    padding-bottom: 50%
  .icons
    padding-bottom 50%
    height 0
    .icon
      overflow hidden
      .icon-item
        float left
        width 25%
        padding-bottom 25%
        position relative
        .icon-list
          display block
          position absolute
          top .15rem
          left 0
          bottom 0
          right 0
          text-align center
          .icon-img
            width .8rem
            height .8rem
            display inline-block
            background-image url(http://s.qunarzz.com/touch_home/images/entrances.png)
            background-repeat no-repeat
            background-size 9rem 3.29rem
          .icon-desc
            line-height .25rem
            font-size .2rem
            margin-top .15rem
            color $textColor
            ellipsis()
          .icon-1
            background-position -.95rem -.35rem
          .icon-2
            background-position -2.95rem -.35rem
          .icon-3
            background-position -5.1rem -.35rem
          .icon-4
            background-position -7.2rem -.35rem
          .icon-5
            background-position -.95rem -2.15rem
          .icon-6
            background-position -2.95rem -2.15rem
          .icon-7
            background-position -5.15rem -2.15rem
          .icon-8
            background-position -7.2rem -2.15rem
</style>
