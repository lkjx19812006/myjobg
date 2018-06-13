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
        &::before{
          content: '';
          height: rem(35);
          width: rem(5);
          background: $themeColor;
          margin-right: rem(20);
          margin-bottom: rem(4);
        }
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
        <h3 class="cnt-item title  flex row item-center">
          {{item.title}}
        </h3>
        <div class="cnt-item des">
          <span class="sub-tit">技术栈：</span>
          <span class="des-item">{{item.des}}</span>
        </div>
        <div class="cnt-item jobs">
          <span class="sub-tit">项目职责：</span>
          <div class="des-item">
            <p v-for="(jobs, jobsIndex) in  item.jobs" :key="jobsIndex">{{jobs}}</p>
          </div>
        </div>
        <div class="cnt-item pDes">
          <span class="sub-tit">项目描述：</span>
          <div class="des-item">
            <p v-for="(jobs, jobsIndex) in  item.jobs" :key="jobsIndex">{{jobs}}</p>
          </div>
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
          title: "基于风险管家App开发微信小程序",
          des: "wepy + redux",
          jobs: ["1.wepy构建小程序应用，redux实现状态管理"],
          pDes: [
            "具备AI风险测评，疾病风险评估，保险解析，智能保险推荐，等功能的小程序项目"
          ]
        },
        {
          title: "风险管家App",
          des: "cordova + vue全家桶",
          jobs: [
            "1.使用vue-cli搭建前端框架",
            "2.修改部分webpack配置",
            "3.实现路由自动生成",
            "4.独立完成基于vue全家桶的单页引用",
            "5.嵌入Cordova 壳中，完成ios App，以及上线"
          ],
          pDes: [
            "具备AI风险测评，疾病风险评估，保险解析，个人中心，智能保险推荐，等功能的项目"
          ]
        },
        {
          title: "保险产品模板页面",
          des: "vue.js+ require.js + YDUI",
          jobs: [
            "1.使用vue.js + require.js + YDUI 搭建具备能快速开发与迭代的保险产品模板页面"
          ],
          pDes: [
            "为实现公司快速迭代开发需求。针对保险产品搭建备能快速开发与迭代的保险产品模板页面。利用vue的自定义指令完成保单校验的优化等"
          ]
        },
        {
          title: "安逸风险管家支付系统",
          des: "vue.js + require.js",
          jobs: [
            "1.项目更新迭代，完成风险管家支付系统前端页面重构",
            "2.基于require.js+vue 构建前端框架 具备模块化功能以及vue.js相关功能，实现快速开发"
          ],
          pDes: [
            "支付系统业务需求，增加代扣模块。为实现快速开发，使用vue.js 为主要架构，使用require.js 实现前端模块化。重构该系统前端部分。"
          ]
        },
        {
          title: "综合运营平台【持续迭代中】",
          des: "vue全家桶 + elementUi",
          jobs: ["1.基于风险管家App的后台cms模块开发"],
          pDes: [
            "完成能够针对智能评测的问题配置，以及保险解析的配置等。具备统计等功能"
          ]
        },
        {
          title: "移动erp系统",
          des: "mui+vue的webapp",
          jobs: ["1.移动erp框架搭建以及后期打包发布测试生成，部分静态页书写"],
          pDes: [
            "1.公司业务需求，解决采购人员报价问题",
            "2.开发混合app移动erp,兼容两端",
            "3.主要技术H5+   mui  vue实现混合开发，具备消息推送，以及版本更新等功能"
          ]
        },
        {
          title: "web项目及迭代",
          des: "vue全家桶 + elementUi + nuxt + Vue服务端渲染",
          jobs: ["1.移动erp框架搭建以及后期打包发布测试生成，部分静态页书写"],
          pDes: [
            "1.公司业务需求变更，更新迭代web",
            "2.利用vue全家桶，以及nuxt框架，和elementui"
          ]
        }
      ]
    };
  },
  components:{
    bottomTip
  }
};
</script>