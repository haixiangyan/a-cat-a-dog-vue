<template>
    <div class="setting">
        <Header></Header>
        <h3>Which one you prefer?</h3>
        <el-radio :value="user.type" @change="onChangeType" label="CAT">CAT</el-radio>
        <el-radio :value="user.type" @change="onChangeType" label="DOG">DOG</el-radio>
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
      onChangeType(event) {
        const newUser = {
          ...this.user,
          type: event.target.value
        }
        // Change localStorage
        localStorage.setItem('user', JSON.stringify(newUser))
        // Change store
        this.updateUser(newUser)
        this.updateAxios(event.target.value)
      },
      ...mapMutations(["updateAxios", "updateUser"])
    },
    components: {
      Header
    }
  }
</script>

<style scoped>
    .setting {
        padding: 8px 16px;
    }
</style>
