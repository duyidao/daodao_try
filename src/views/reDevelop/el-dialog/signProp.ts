import { ElDialog, ElButton, type DialogProps } from "element-plus";
import { ref, h, createApp } from "vue";

/**
 * 弹窗组件
 * @param {component} 组件
 * @param {props} 组件props
 * @param {modalProps} 弹窗props
 */
export const signProp = <T extends Record<string, any>>({
  component,
  props,
  modalProps = {},
  onComfirm = () => {},
}: {
  component: any;
  props: T;
  modalProps?: Partial<DialogProps>;
  onComfirm?: () => Promise<void> | void;
}) => {
  const visible = ref(true);
  const instanceRef = ref<any>(null);
  const loading = ref(false);

  const dialog = () =>
    h(
      ElDialog,
      {
        ...modalProps,
        modelValue: visible.value,
      },
      {
        default: () => h(component, { ...props, ref: instanceRef }),
        footer: () =>
          h("div", {}, [
            h(
              ElButton,
              {
                onClick() {
                  unmount();
                },
              },
              { default: () => "取消" }
            ),
            h(
              ElButton,
              {
                type: "primary",
                loading: loading.value,
                async onClick() {
                  loading.value = true;
                  try {
                    await instanceRef.value?.submit();
                    await onComfirm();
                    unmount();
                  } catch (error) {
                    console.log(error);
                  } finally {
                    loading.value = false;
                  }
                },
              },
              { default: () => "确认" }
            ),
          ]),
      }
    );

  const app = createApp(dialog);
  const div = document.createElement("div");
  document.body.appendChild(div);
  app.mount(div);

  function unmount() {
    visible.value = false;
    setTimeout(() => {
      // 组件关闭后再卸载组件，保留弹框的关闭动画
      app.unmount();
      document.body.removeChild(div);
    }, 300);
  }
};
