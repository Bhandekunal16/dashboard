import { toast } from "react-toastify";

export const notify = (data) => {
  toast.success(`${data}`, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const warn = (data) => {
  toast.warn(`${data}`, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const info = (data) => {
  toast.info(`${data}`, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const error = (data) => {
  toast.error(`${data}`, {
    position: toast.POSITION.TOP_RIGHT,
  });
};