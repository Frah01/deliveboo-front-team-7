<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <AppFooter></AppFooter>
</template>

<style lang="scss">
 @import "./styles/app.scss";
</style>