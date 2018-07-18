<template>
    <div class="main">
        <div class="nav">
            <left-nav></left-nav>
        </div>
        <div class="main-box">
            <right-pane></right-pane>
        </div>
        <p class="clear"></p>
    </div>
</template>
<script>
import LeftNav from './LeftNav'
import RightPane from './RightPane'

export default {
    name: 'Home',
    components: {
        LeftNav,
        RightPane
    }
}
</script>
<style>
.main{
    height: 100%;
}
.nav {
    float: left;
    width: 200px;
    height: 100%;
    background-color: #f3f5f7;
}

.main-box {
    float: left;
    height: 100%;
    width: calc(100% - 200px);
    overflow-x: hidden;
    overflow-y: auto;
}
.clear{
    clear: both;
}
</style>

