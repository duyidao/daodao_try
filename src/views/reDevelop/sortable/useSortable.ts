import Sortable from 'sortablejs'
import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export const useSortable = (containerRef: any, list: Ref<any[]>, options?: any) => {
  let instance: any = ref(null)
  onMounted(() => {
    instance.value = Sortable.create(containerRef.value, {
      ...options,
      onStart: (evt: { item: any }) => {
        // 给拖拽的元素添加样式类
        evt.item.classList.add('bg-amber')
      },
      onEnd: (evt: { item: any }) => {
        // 移除拖拽样式类
        evt.item.classList.remove('bg-amber')
      },
      onUpdate: (item: { oldIndex: number, newIndex: number }) => {
        options?.onUpdate?.(item)
        const { oldIndex, newIndex } = item
        const oldValue = list.value[oldIndex]
        list.value.splice(oldIndex, 1)
        list.value.splice(newIndex, 0, oldValue)
      },
    })

    // 在组件卸载时销毁 sortable 实例
    onUnmounted(() => {
      instance.value.destroy()
    })
  })

  return instance
}