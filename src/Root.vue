<template>
  <div class="micro_app"><slot></slot></div>
</template>
<script>
// 微前端环境下，使用作为根组件
  export default {
    name: "Root"
  };
</script>
<style lang="scss" scoped>
.micro_app {
  background: var(--layout-background-color);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
