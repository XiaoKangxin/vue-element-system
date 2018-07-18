<template>
  <div class="left-nav">
    <div class="logo">
      <i class="el-icon-menu"></i>
      <a>工单管理系统</a>
    </div>
    <el-menu>
      <el-submenu index="manager">
        <template slot="title">导航一</template>
        <el-menu-item index="User" @click="addTab('User-用户管理')">用户管理</el-menu-item>
        <el-menu-item index="Menu" @click="addTab('Menu-菜单管理')">菜单管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'LeftNav',
  methods: {
    ...mapMutations('navTabs', [
      'addTab'
    ])
  }
}
</script>
<style scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  border-bottom: solid 0.01rem #e5e5e5;
}

i {
  margin-right: 0.5rem;
}
.el-menu{
  border: 0
}
</style>

