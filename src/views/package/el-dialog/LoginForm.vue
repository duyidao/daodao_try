<script setup lang="ts">
import { reactive, ref } from 'vue'

withDefaults(
  defineProps<{
    msg: string
  }>(),
  {
    msg: '请登录'
  }
)

const formData = reactive({
  username: '',
  password: ''
})

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ]
}

const formRef = ref(null)

const submit = () => {
  return new Promise((resolve, reject) => {
    formRef.value.validate((valid: boolean) => {
      if (valid) {
        resolve(valid)
      } else {
        reject(valid)
      }
    })
  })
}


defineExpose({
  submit
})
</script>

<template>
  <el-form ref="formRef" :model="formData" :rules="rules">
    <p class="mb-20">{{ msg }}</p>
    <el-form-item label="账号" prop="username">
      <el-input v-model="formData.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="formData.password"></el-input>
    </el-form-item>
  </el-form>
</template>

<style scoped>

</style>