<template>
  <hatech-table-page :page="page" @onEvent="onEvent">
  </hatech-table-page>
</template>

<script>
import { HatechTablePage } from '@hatech/table-page'
import Page from './config'
export default {
  components: { HatechTablePage },
  data() {
    return {
      page: Page.call(this)
    }
  },
  methods: {
    onEvent({ event, params } = {}) {
      const func = this[event]
      if (func && typeof func === 'function') {
        func(params)
      }
    }
  }
}
</script>
