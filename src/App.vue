<template>
  <yd-layout id="app">
    <router-view v-wechat-title="$route.meta.title" />
    <yd-tabbar slot="tabbar">
      <yd-tabbar-item title="基本信息" link="/home" :active="path === '/home'">
        <yd-icon name="home" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="项目经验" link="/exp" :active="path === '/exp'">
        <yd-icon name="order" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="擅长领域" link="/goodAt" :active="path === '/goodAt'">
        <yd-icon name="compose" slot="icon"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
  </yd-layout>
</template>

<script>
export default {
  name: "App",
  computed: {
    path() {
      var path = this.$route.path;
      return path;
    }
  }
};
</script>

<style>
#app {
  height: 100vh;
  background: #f5f5f5;
}
</style>
