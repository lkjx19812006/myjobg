<style lang="scss" scoped>
@import "@/css/mixin.scss";
.container {
  font-size: rem(30);
  line-height: rem(42);
  color: $textColor;
  padding: rem(32);

  .ball-scale-multiple {
    height: rem(60);
    width: rem(60);
    > div {
      background: $themeColor;
    }
  }

  .info-wrap {
    .right {
      margin-top: rem(20);
      .cnt-item {
        margin-bottom: rem(20);
        .des-item {
          p,
          span {
            font-size: rem(28);
            color: $textColor;
            line-height: rem(42);
          }
        }
      }
      .title {
        color: $itemTitleColor;
      }
      .sub-tit {
        color: $itemSubTitleColor;
      }
    }
  }
}
</style>

<template>
  <div class="container flex column" v-animate="{value: 'slideInRight', duration: 300, delay: 300}">
    <div class="info-wrap flex row" v-for="(item, index) in listInfo" :key="index">
      <div class="right">
        <h3 class="cnt-item title flex row item-center">
          <div class="ball-scale-multiple">
            <div></div>
            <div></div>
            <div></div>
          </div>
          {{item.title}}
        </h3>
        <div class="cnt-item des flex row item-center">
          <span class="sub-tit">熟练程度：</span>
          <yd-icon style="color: #ffd301" name="star" v-for="(lvs, indexlv) in item.lv" :key="indexlv"></yd-icon>
        </div>
      </div>
    </div>
    <bottomTip></bottomTip>
  </div>
</template>

<script>
import bottomTip from "@/components/common/bottom-tip";
export default {
  data() {
    return {
      listInfo: [
        {
          title: "Vue + Vue全家桶",
          lv: 5
        },
        {
          title: "HTML/CSS/HTML5/CSS3",
          lv: 4
        },
        {
          title: "Javascript(原生)",
          lv: 4
        },
        {
          title: "react、Git、RequireJS、redux",
          lv: 3
        },
        {
          title: "JQuery、zepto、bootstrap（库/框架）",
          lv: 5
        },
        {
          title: "Node、mongodb数据库、redis",
          lv: 3
        }
      ]
    };
  },
  components: {
    bottomTip
  }
};
</script>