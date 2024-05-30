import { Slide, toast } from "react-toastify";

export default function showToast(type, message, config = {}) {
  toast(message, {
    type: type,
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0.2,
    theme: "colored",
    style: {
      boxShadow: "2px 6px 8px #ccc",
    },
    transition: Slide,
    ...config,
  });
}
