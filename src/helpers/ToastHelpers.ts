import { toast, ToastPosition } from 'react-toastify'

export const showSimpleToast = (message: string, position: ToastPosition = "top-center"): void => {
    toast(message, { position })
}