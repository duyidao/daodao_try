export interface FormItem {
  label: string
  type?: string | any
  key: string
  props?: any
  rules?: any[]
  hidden?: boolean
  placeholder?: string
  span?: number
  onChange?: (value: any) => void
}