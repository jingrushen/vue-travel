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
    name: 'hello'
  }
}
</script>

<style>

</style>
