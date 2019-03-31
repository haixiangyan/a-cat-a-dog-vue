<template>
    <header class="header">
        <md-menu md-size="small" md-direction="bottom-start" md-align-trigger>
            <md-button md-menu-trigger class="md-icon-button">
                <md-icon>person</md-icon>
            </md-button>

            <md-menu-content>
                <md-menu-item>admin</md-menu-item>
            </md-menu-content>
        </md-menu>

        <md-button :md-ripple="true">
            <router-link to="/">🐱A🐶</router-link>
        </md-button>

        <md-menu class="header-setting-menu" md-size="small" md-direction="bottom-end" md-align-trigger>
            <md-button md-menu-trigger class="md-icon-button">
                <md-icon>settings</md-icon>
            </md-button>

            <md-menu-content class="header-setting-menu">
                <md-menu-item class="header-setting-menu-item">
                    <router-link to="/setting">My Setting</router-link>
                </md-menu-item>
                <md-menu-item class="header-setting-menu-item">
                    <router-link to="/votes">Voted Images</router-link>
                </md-menu-item>
                <md-menu-item class="header-setting-menu-item">
                    <router-link to="/favourites">Favourite Images</router-link>
                </md-menu-item>
            </md-menu-content>
        </md-menu>
    </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang="scss">
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
        color: #20232a;
        font-size: 1.2em;

        .md-icon-button {
            color: rgba(0, 0, 0, 0.54);
        }
        &-setting-menu-item {
            a {
                display: inline-block;
                width: 100%;
                color: rgba(0, 0, 0, 0.87) !important;
                text-decoration: none !important;
            }
            &:hover {
                background-color: rgba(0, 0, 0, 0.08);
            }
        }
    }
</style>
