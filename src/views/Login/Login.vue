<template>
  <div class="login container">
    <div class="box-card">
      <div class="login-title">后台管理系统</div>
      <!-- 表单区域 -->
      <el-form :model="loginFrom" :rules="loginFromRules" ref="loginFromRef">
        <el-form-item prop="userName">
          <el-input v-model="loginFrom.userName" placeholder="请输入用户名" @keydown.enter.native="submit" clearable>
            <i slot="prefix" class="iconfont icon-yonghu"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input type="password" v-model="loginFrom.passWord" placeholder="请输入密码" @keydown.enter.native="submit" clearable>
            <i slot="prefix" class="iconfont icon-Password"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="submit" :loading="loading">登录</el-button>
        </el-form-item>
      </el-form>
      <!-- 表单区域 -->
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { login } from '@/api/Login/Login'
export default {
  name: 'Login',
  data() {
    return {
      // 登录表单数据
      loginFrom: {
        userName: 'admin',
        passWord: '123456'
      },
      // 控制按钮loading
      loading: false,
      // 登录表单验证
      loginFromRules: {
        userName: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
        ],
        passWord: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations('userInfo', ['updateToken', 'updatePermissions']),
    // 登录
    submit() {
      this.$refs.loginFromRef.validate(async valid => {
        if (!valid) {
          return
        }
        this.loading = true
        const res = await login(this.loginFrom)
        if (res.status !== 200) {
          this.loading = false
          return this.$message.error(res.message)
        }
        this.updateToken(res.tokenKey)
        this.updatePermissions(res.permissions)
        this.$router.push('/HomePage')
        this.$message.success('登录成功')
        this.loading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  background-image: url('https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3812b31bb051f8192a326a7cd9b44aed2e73e7f5.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  .box-card {
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 20px;
    width: 400px;
    height: 260px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    .login-title {
      display: block;
      text-align: center;
      margin-bottom: 20px;
      font-size: 25px;
      color: #0ab35b;
      letter-spacing: 10px;
      font-weight: 600;
      opacity: 0.8;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
