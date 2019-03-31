<template>
    <header class="header">
        <md-button class="md-icon-button">
            <md-icon>person</md-icon>
        </md-button>

        <md-button :md-ripple="true">
            <router-link to="/">🐱A🐶</router-link>
        </md-button>

        <md-button class="md-icon-button">
            <md-icon>settings</md-icon>
        </md-button>
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

        a {
            color: inherit;
        }
        .md-icon-button {
            color: rgba(0, 0, 0, 0.54);
        }
    }
</style>
