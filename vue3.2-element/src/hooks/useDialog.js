// import { reactive, ref } from 'vue'

// 弹窗hooks

export default function useDialogProps(dialog) {
  // 父组件table打开弹窗
  const openHooksDialog = (eventObj = { type: 'add' }) => {
    dialog.value.openDialog(eventObj)
  }

  return {
    openHooksDialog
  }
}
