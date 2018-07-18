<template>
  <div>
    <el-button type="success" plain @click="addTab('Yes-详情')">详情</el-button>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Menu',
  data(){
    return {
        btnName:'主要按钮',
    }
  },
  methods: {
    ...mapMutations('navTabs', [
      'addTab'
    ])
  }
}
</script>
<style scoped>

</style>

