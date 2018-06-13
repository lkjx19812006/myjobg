<style lang="scss" scoped>
@import "@/css/mixin.scss";
.container {
  font-size: rem(30);
  line-height: rem(42);
  color: $textColor;
  padding: rem(32);

  .info-wrap {
    padding: rem(35) 0;
  }

  .ball-scale-multiple {
    height: rem(60);
    width: rem(60);
    > div {
      background: $themeColor;
    }
  }
}
</style>

<template>
  <div class="container flex column">
    <div v-animate="{value: 'slideInRight', duration: 300, delay: 300 * index}" class="info-wrap flex row item-center" v-for="(item, index) in userInfos" :key="index">
      <div class="ball-scale-multiple">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span>{{item.label}}：</span>
      <a :href="'tel:' + item.value" v-if=" item.label === '电话'" style="color: #194FC8">{{item.value}}</a>
      <span v-else>{{item.value}}</span>
    </div>
    <a style="color: #194FC8" class="flex row center" v-if="plateform === 'iphone'" href="/static/个人简历.doc" download="殷谦简历.doc">殷谦简历.doc-点击下载</a>
    <a style="color: #194FC8" class="flex row center" v-else-if="plateform === 'android'" href="/static/个人简历.doc">殷谦简历.doc-点击下载</a>
    <a style="color: #194FC8" class="flex row center" v-else href="/static/个人简历.doc" download="殷谦简历.doc">殷谦简历.doc-点击下载</a>

    <bottomTip tips="— 联系我直接点击电话 —"></bottomTip>
  </div>
</template>

<script>
import bottomTip from "@/components/common/bottom-tip";
export default {
  data() {
    return {
      userInfos: [
        { label: "姓名", value: "殷谦" },
        { label: "年龄", value: "27" },
        { label: "求职意向", value: "web前端" },
        { label: "工作年限", value: "4年" },
        { label: "电话", value: "17763732365" },
        { label: "邮箱", value: "371516100@qq.com" },
        { label: "最高学历", value: "本科" }
      ]
    };
  },
  computed: {
    //判断平台方法
    plateform() {
      var agent = window.navigator.userAgent.toLowerCase();
      if (agent.indexOf("iphone") != -1 && agent.indexOf("android") == -1) {
        return "iphone";
      } else if (
        agent.indexOf("iphone") == -1 &&
        agent.indexOf("android") != -1
      ) {
        return "android";
      } else {
        return "";
      }
    }
  },
  components: {
    bottomTip
  }
};
</script>