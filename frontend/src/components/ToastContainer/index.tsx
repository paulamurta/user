import { useToaster, toast, ToastType } from "react-hot-toast";
import { Box, BoxIcon, ContainerBox, Divider } from "./styles";
import { FiCheck, FiX } from "react-icons/fi";
import { IToastProps } from "./types";
import { ReactElement } from "react";
import {
  BsCheckCircle as Check,
  BsExclamationCircle as Exclamation,
} from "react-icons/bs";

export function ToastContainer({ isLoginToast }: IToastProps) {
  const { toasts } = useToaster();
  toasts.forEach((e) => {
    if (isLoginToast) {
      e.duration = Infinity;
    } else {
      e.duration = 5000;
    }
  });

  const toastStyle: {
    [key in ToastType]: {
      icon: ReactElement;
      class: string;
    };
  } = {
    error: {
      icon: <Exclamation />,
      class: "toast-error",
    },
    success: {
      icon: <Check />,
      class: "toast-success",
    },
    blank: {
      icon: <FiCheck />,
      class: "toast-blank",
    },
    custom: {
      icon: <Exclamation />,
      class: "toast-custom",
    },
    loading: {
      icon: <FiCheck />,
      class: "toast-loading",
    },
  };

  function renderComponent() {
    return toasts.map((e) => {
      if (e.visible) {
        return (
          <Box
            id={e.id}
            key={e.id}
            isLoginToast={isLoginToast}
            initial={{ x: "15%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={toastStyle[e.type].class}
          >
            <BoxIcon>{toastStyle[e.type].icon}</BoxIcon>
            <p>{typeof e.message == "string" ? e.message : ""}</p>
            <BoxIcon>
              <Divider />
              <button onClick={() => toast.remove(e.id)}>
                <FiX />
              </button>
            </BoxIcon>
          </Box>
        );
      }
    });
  }

  return isLoginToast ? (
    renderComponent()
  ) : (
    <ContainerBox>{renderComponent()}</ContainerBox>
  );
}
