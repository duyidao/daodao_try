<script setup lang="ts">
import FormBuilder from './formBuilder.vue'
import { ref, useTemplateRef, computed } from 'vue'
import { useResetRefByObj } from '@/views/hook/stateReset/reset'
import { ElInput } from 'element-plus'
import MyButton from '@/views/reDevelop/el-button/myButton.vue'
import { AddLocation } from '@element-plus/icons-vue'
import type { FormItem } from './type'

const formItems = computed<FormItem[]>(() => [
  {
    label: '姓名',
    key: 'name',
    type: 'input',
    rules: [
      { required: true, message: '请输入姓名', trigger: 'blur' },
    ],
    placeholder: '请输入姓名',
    span: 12,
    onChange: (val: string) => {
      console.log(val)
    }
  },
  {
    label: '年龄',
    key: 'age',
    type: 'number',
    rules: [
      { required: true, message: '请输入年龄', trigger: ['blur', 'change'] },
    ],
    span: 12,
    placeholder: '请输入年龄',
  },
  {
    label: '性别',
    key: 'sex',
    type: 'select',
    rules: [
      { required: true, message: '请选择年龄', trigger: ['blur', 'change'] },
    ],
    props: {
      placeholder: '请选择年龄',
      options: [
        { label: '男', value: 1 },
        { label: '女', value: 2 },
      ]
    }
  },
  {
    label: '地址',
    key: 'address',
    placeholder: '请输入地址',
  },
  {
    label: '备注',
    key: 'brank',
    placeholder: '请输入备注',
    hidden: Boolean(formData.value.name === '张三')
  },
  {
    label: '自定义组件',
    key: 'MyButton',
    type: MyButton,
    props: {
      text: '自定义按钮'
    }
  },
])

const { state: formData, reset } = useResetRefByObj<Record<string, any>>({
  name: '',
  address: '',
  brank: '',
  age: null,
  sex: null
})

const formBuilderRef = useTemplateRef('formBuilderRef')

const handleSubmit = async () => {
  await formBuilderRef.value?.validate()
  return new Promise((resolve: any, reject: any) => {
    // 模拟调用接口
    setTimeout(() => {
      resolve('')
    }, 2000)
  })
}

const handleReset = () => {
  reset()
  formBuilderRef.value?.resetFields()
}
</script>

<template>
  <div>
    <FormBuilder ref="formBuilderRef" :formItems="formItems" v-model="formData">
      <template #address>
        <el-input v-model="formData.address" placeholder="请输入地址" :suffix-icon="AddLocation"></el-input>
      </template>
    </FormBuilder>
    <MyButton @click="handleSubmit">提交</MyButton>
    <el-button @click="handleReset">重置</el-button>
  </div>
</template>

<style scoped>

</style>