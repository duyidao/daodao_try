<script setup lang="ts">
import { ElForm, ElFormItem, ElInput, ElInputNumber, ElSelect, ElRow, ElCol } from 'element-plus'
import { computed, getCurrentInstance } from 'vue'

const props = defineProps<{
  formItems: {
    label: string
    type: string
    key: string
    props?: any
    rules?: any[]
  }
}>()

const formData = defineModel()

// 表单校验规则
const formRules = computed(() => {
  let rules = {}
  props.formItems.forEach(item => rules[item.key] = item.rules)
  return rules
})

// 表单组件字典
const formItemDict = {
  input: ElInput,
  number: ElInputNumber,
  select: ElSelect,
}

const form = computed(() => props.formItems.filter(item => !item.hidden))

// 属性白名单
const rootProps = ['type', 'key', 'label', 'rules']

/**
 * 获取表单项的props
 * @param item 表单项
 * @returns 表单项的props
 */
const getProps = (item) => {
  if (item.props) return item.props
  let props = {}
  for (let key in item) {
    if (rootProps.includes(key)) continue
    props[key] = item[key]
  }
  return props
}

/**
 * 获取表单项的组件
 * @param item 表单项
 * @returns 表单项的组件
 */
const getComponent = (item) => {
  const { type } = item
  if (type && typeof type !== 'string') {
    return type
  }
  return formItemDict[type || 'input']
}

// el-form方法暴露给父组件
const vm = getCurrentInstance(); 
function changeRef(inputInstance) {
  vm.exposed = vm.exposeProxy = inputInstance || {}; 
} 
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