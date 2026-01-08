<script setup lang="ts">
import { ElForm, ElFormItem, ElInput, ElInputNumber, ElSelect, ElRow, ElCol } from 'element-plus'
import { computed, getCurrentInstance } from 'vue'
import type { ComponentInstance } from "vue"; 
import type { FormItem } from './type'

const props = defineProps<{
  formItems: FormItem[]
}>()

const formData = defineModel<Record<string, any>>('modelValue', {
  default: () => ({}),
})

// 表单校验规则
const formRules = computed(() => {
  let rules: Record<string, any[]> = {}
  props.formItems.forEach((item: FormItem) => {
    if (item.rules) {
      rules[item.key] = item.rules
    }
  })
  return rules
})

// 表单组件字典
const formItemDict: Record<string, any> = {
  input: ElInput,
  number: ElInputNumber,
  select: ElSelect,
}

const form = computed(() => props.formItems.filter((item: FormItem) => !item.hidden))

// 属性白名单
const rootProps = ['type', 'key', 'label', 'rules']

/**
 * 获取表单项的props
 * @param item 表单项
 * @returns 表单项的props
 */
const getProps = (item: any) => {
  if (item.props) return item.props
  let bindProps: any = {}
  for (let key in item) {
    if (rootProps.includes(key)) continue
    bindProps[key] = item[key]
  }
  return bindProps
}

/**
 * 获取表单项的组件
 * @param item 表单项
 * @returns 表单项的组件
 */
const getComponent = (item: FormItem) => {
  const { type } = item
  if (type && typeof type !== 'string') {
    return type
  }
  return formItemDict[type || 'input']
}

// el-form方法暴露给父组件
const vm = getCurrentInstance(); 
function changeRef(inputInstance: any) {
  vm!.exposed = vm!.exposeProxy = inputInstance || {}; 
}

defineExpose({} as ComponentInstance<typeof ElForm>);
</script>

<template>
  <el-form :ref="changeRef" :model="formData" :rules="formRules">
    <el-row :gutter="20">
      <el-col v-for="item in form" :key="item.key" :span="item.span || 24">
        <el-form-item :label="item.label" :prop="item.key">
          <slot :name="item.key">
            <component :is="getComponent(item)" v-model="formData[item.key]" v-bind="getProps(item)"></component>
          </slot>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<style scoped>

</style>