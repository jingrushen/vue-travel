<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.global {
  opacity: 0.5;
  color: red;
  background: green;
  width: 100px;
}
</style>
