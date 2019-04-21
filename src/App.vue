<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    A,
    C,
    B
  },
  data() {
    age= 12,
    name= 'master'
  }
}
</script>

<style>

</style>
