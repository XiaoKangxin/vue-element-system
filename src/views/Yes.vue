<template>
    <div>
        <el-button type="danger" icon="el-icon-delete" circle @click="closeTab('Yes')"></el-button>
    </div>
</template>
<script>
import { mapState , mapMutations } from 'vuex'
export default {
    name: 'Yes',
    data(){
    return {
        btnName:'主要按钮',
        }
    },
    methods: {
        ...mapMutations('navTabs', [
        'closeTab'
        ])
    }
}
</script>
<style>

</style>

