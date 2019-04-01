<template>
    <div id="app">
        <el-card class="app-wrapper">
            <router-view/>
        </el-card>
    </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    #app {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;

        .app-wrapper {
            width: 370px;
            height: 680px;
            padding: 16px 8px;
            overflow: auto;

            .el-card__body {
                padding: 0;
            }
        }
    }

    a {
        text-decoration: none;
        color: #303133;
    }
    a.menu-link {
        display: inline-flex;
        width: 100%;
    }
</style>
