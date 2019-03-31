<template>
    <el-form :model="registerForm" ref="registerForm" :rules="rules" class="register">
        <img class="register-avatar" src="https://i.loli.net/2019/03/30/5c9efda85ee97.jpg" alt="avatar"/>
        <section class="register-subId">
            <el-form-item prop="subId">
                <el-input v-model="registerForm.subId" placeholder="User Name"></el-input>
            </el-form-item>
        </section>
        <section class="register-type">
            <p>I prefer...</p>
            <el-form-item prop="type">
                <el-radio v-model="registerForm.type" label="CAT">CAT</el-radio>
                <el-radio v-model="registerForm.type" label="DOG">DOG</el-radio>
            </el-form-item>
        </section>
        <section>
            <el-button @click="register" class="register-button" type="primary">GET STARTED</el-button>
        </section>
    </el-form>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: "Register",
    data() {
      return {
        registerForm: {
          subId: '',
          type: 'CAT',
        },
        rules: {
          subId: [{required: true, message: 'User name can\' be empty'}],
          type: [{required: true, message: 'Type can\' be empty'}]
        }
      }
    },
    methods: {
      register() {
        this.$refs.registerForm.validate((valid) => {
          if (valid) {
            const user = this.registerForm
            // Update locally
            localStorage.setItem('user', JSON.stringify(user))
            // Update stores
            this.updateUser(user)
            this.updateAxios(user.type)
            this.$message.success('Howa')
            // Jump to home page
            this.$router.push('/')
          } else {
            this.$message.error('Something wrong with registration form')
            return false
          }
        })
      },
      ...mapMutations(["updateUser", "updateAxios"])
    }
  }
</script>

<style scoped lang="scss">
    .register {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &-avatar {
            display: block;
            text-align: center;
            width: 180px;
            margin: 0 auto 12px;
        }

        &-button {
            width: 100%;
        }
    }
</style>
