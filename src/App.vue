<template>
    <div id="app">
        <md-card class="app-wrapper">
            <router-view/>
        </md-card>
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
</style>
