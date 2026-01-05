<script setup lang="ts">
import { ChatLineRound, Male } from '@element-plus/icons-vue'
import { createReusableTemplate } from './commomComp'

const [DefineTemplate, UseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate>
    <template #default="{ title, money, onFoo }">
      <el-row :gutter="16"
        @click="onFoo && onFoo(111)">
        <el-col :xs="24"
          :sm="12"
          :md="8"
          class="text-center mb-4">
          <el-statistic :title="title"
            :value="money" />
        </el-col>
        <el-col :xs="24"
          :sm="12"
          :md="8"
          class="text-center mb-4">
          <el-statistic :value="138">
            <template #title>
              <div style="display: inline-flex; align-items: center">
                Ratio of men to women
                <el-icon style="margin-left: 4px"
                  :size="12">
                  <Male />
                </el-icon>
              </div>
            </template>
            <template #suffix>/100</template>
          </el-statistic>
        </el-col>
        <el-col :xs="24"
          :sm="12"
          :md="8"
          class="text-center mb-4">
          <el-statistic title="Feedback number"
            :value="562">
            <template #suffix>
              <el-icon style="vertical-align: -0.125em">
                <ChatLineRound />
              </el-icon>
            </template>
          </el-statistic>
        </el-col>
      </el-row>
    </template>
  </DefineTemplate>
  <UseTemplate title="header"
    :money="10000"
    @foo="console.log"></UseTemplate>
  <div class="text-center my-20 text-orange">我是其他的内容</div>
  <UseTemplate title="main"
    :money="3479"></UseTemplate>
  <div class="text-center my-20 text-orange">我是其他的内容</div>
  <div class="text-center my-20 text-orange">我是其他的内容</div>
  <UseTemplate title="footer"
    :money="20814"></UseTemplate>
</template>

<style scoped></style>
