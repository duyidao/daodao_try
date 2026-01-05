<script setup lang="ts">
import { signProp } from './signProp'
import LoginForm from './LoginForm.vue'

const handleShowDialog = () => {
  signProp<{
    msg: string
  }>({
    component: LoginForm,
    props: { msg: '欢迎登录刀刀小站' },
    modalProps: {
      title: '登录',
      appendToBody: true,
      destroyOnClose: true,
    },
    onComfirm: () => {
      return new Promise((resolve) => {
        console.log('模拟调用接口')
        setTimeout(() => {
          console.log('模拟请求成功')
          resolve(undefined)
        }, 3000)
      })
    },
  })
}
</script>

<template>
  <div>
    <el-button @click="handleShowDialog">显示弹窗</el-button>
  </div>
</template>
