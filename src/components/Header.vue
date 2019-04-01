<template>
    <header class="header">
        <el-dropdown placement="bottom-start" trigger="click">
            <span class="el-dropdown-link">
                <i class="el-icon-mobile-phone header-icon"></i>
            </span>
            <el-dropdown-menu>
                <el-dropdown-item>
                    admin
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

        <el-button @click="linkHome">🐱A🐶</el-button>

        <el-dropdown trigger="click" class="header-setting-menu">
            <span class="el-dropdown-link">
                <i class="el-icon-setting header-icon"></i>
            </span>

            <el-dropdown-menu placement="bottom-end">
                <el-dropdown-item>
                    <router-link class="menu-link" to="/setting">My Setting</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                    <router-link class="menu-link" to="/votes">Voted Images</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                    <router-link class="menu-link" to="/favourites">Favourite Images</router-link>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </header>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      linkHome() {
        this.$router.push('/')
      }
    }
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
        &-icon {
            font-size: 1.5em;
            cursor: pointer;
        }
    }
</style>
