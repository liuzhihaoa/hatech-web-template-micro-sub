<template>
  <root>
    <router-view></router-view>
  </root>
</template>

<script>
import Root from './Root'
export default {
  name: "App",
  components: {Root},
  computed: {},
  methods: {
    onEvent({ event, params } = {}) {
      this[event] && this[event](params);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
