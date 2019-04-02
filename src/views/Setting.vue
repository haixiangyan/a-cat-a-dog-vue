<template>
    <div class="setting">
        <Header></Header>
        <h3>Which one would you prefer?</h3>
        {{user.type}}
        <section class="setting-type">
            <el-radio class="setting-type-radio" v-model="user.type" @change="onChangeType" label="CAT">CAT</el-radio>
            <el-radio class="setting-type-radio" v-model="user.type" @change="onChangeType" label="DOG">DOG</el-radio>
        </section>
    </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import Header from '../components/Header'

  export default {
    name: "Setting",
    computed: {
      ...mapState(["user"])
    },
    methods: {
      onChangeType(type) {
        const newUser = { type, ...this.user }
        // Change localStorage
        localStorage.setItem('user', JSON.stringify(newUser))
        // Change store
        this.updateUser(newUser)
        this.updateAxios(type)
      },
      ...mapMutations(["updateAxios", "updateUser"])
    },
    components: {
      Header
    }
  }
</script>

<style scoped lang="scss">
    .setting {
        padding: 8px 16px;
        h3 {
            margin-top: 24px;
        }
        &-type {
            margin-top: 12px;
            &-radio {
                & + & {
                    display: flex;
                    margin-top: 16px;
                }
            }
        }
    }
</style>
