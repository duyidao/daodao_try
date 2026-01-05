<script lang="ts" setup>
import { routes } from '@/router/router'
import { ref, computed } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Operation,
  Expand,
  Fold,
  Briefcase,
  Histogram,
} from '@element-plus/icons-vue'
import { RouterView, useRoute } from 'vue-router'
import { useEvent } from '@/views/hook/useEventListener/index'
import { throttle } from 'lodash-es'

type AllowedPath = '/js' | '/package' | '/vue'

const pathIconMap: Record<AllowedPath, typeof Document> = {
  '/js': Document,
  '/reDevelop': Briefcase,
  '/vue': Histogram,
  '/vite': IconMenu,
  '/hook': Operation,
}

const route = useRoute()

const menuList = computed(() => routes.value[0]!.children)

// 当前菜单是否展开
const isCollapse = ref(false)
const handleMenuExpand = () => {
  isCollapse.value = !isCollapse.value
}

const scrollWindow = () => {
  const viewportWidth = window.innerWidth;
  isCollapse.value = viewportWidth < 1024 ? true : false
}
scrollWindow()
// 监听窗口大小变化
useEvent('resize', throttle(scrollWindow, 500))

const menuDict = {
  'js': 'JavaScript',
  'reDevelop': '二次开发',
  'vue': 'Vue',
  'vite': '项目配置',
  'hook': '钩子函数',
}
</script>

<template>
  <div class="flex w-full h-full">
    <!-- 左侧菜单栏 -->
    <div class="menu h-full pb-10 shadow-xl">
      <el-menu class="h-[calc(100%-50px)] !border-r-none overflow-auto"
        :class="{ 'w-250': !isCollapse }"
        :default-active="route.path"
        :collapse="isCollapse"
        router>
        <el-sub-menu v-for="item in menuList"
          :key="item.path"
          :index="item.path">
          <template #title>
            <el-icon el-icon>
              <component :is="pathIconMap[item.path as AllowedPath]" />
            </el-icon>
            <span>{{ menuDict[item.path.replace('/', '')] }}</span>
          </template>
          <el-menu-item v-for="route in item.children"
            :key="route.path"
            :index="route.path">
            <el-tooltip
              :content="route.meta!.name"
              placement="right"
            >
              <span class="w-[calc(100%-10px)] truncate">{{ route.meta!.name }}</span>
            </el-tooltip>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
      <div class="flex w-full h-50 items-center justify-start bg-[var(--el-menu-bg-color)] pl-15">
        <el-icon class="cursor-pointer"
          size="30"
          color="#505050"
          @click="handleMenuExpand">
          <Expand v-show="isCollapse" />
          <Fold v-show="!isCollapse" />
        </el-icon>
      </div>
    </div>
    <!-- 右侧内容 -->
    <div class="p-15 flex-1">
      <el-card class="h-60 mb-10 content-title">
        <div class="flex items-center gap-12">
          <h1 class="text-16 font-600">{{ route.meta!.name }}</h1>
          <div v-if="route.meta!.tags?.length" class="flex items-center gap-8">
            <el-tag v-for="item in route.meta!.tags">{{item}}</el-tag>
          </div>
        </div>
        <el-button disabled>返回首页</el-button>
      </el-card>
      <el-card class="h-[calc(100%-70px)]">
        <RouterView />
      </el-card>
    </div>
  </div>
</template>

<style lang="less" scoped>
.menu {
  :deep(.el-menu) {
    &::-webkit-scrollbar {
      width: 0;
    }
  }
}

.content-title {
  :deep(.el-card__body) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
  }
}
</style>
