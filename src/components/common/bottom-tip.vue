<style lang="scss" scoped>
@import "../../css/mixin.scss";
.bottom-tips {
  font-size: rem(24);
  color: #a0a0a0;
  background: $bodybgc;
  margin-top: rem(16);
  text-align: center;
}
</style>
<template>
  <div class="bottom-tips flex row center">
    {{tips}}
  </div>
</template>
<script>
export default {
  props: {
    tips: {
      type: String,
      default: "— 更多详情暂未添加 —"
    }
  }
};
</script>
