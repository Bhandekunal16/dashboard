import { toast } from "react-toastify";

export const notify = (data) => {
    toast.success(`${data}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };