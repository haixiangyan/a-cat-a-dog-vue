<template>
    <div id="app">
        <el-card class="app-wrapper">
            <router-view/>
        </el-card>
    </div>
</template>

<style lang="scss">
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
        }

        a {
            text-decoration: none;
        }
    }
    .ripple-left.md-button > .md-ripple {
        display: flex;
        text-align: left;
        justify-content: flex-start !important;
    }
</style>
