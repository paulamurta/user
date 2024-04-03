import { ReactNode } from "react";

export type ModalProps = {
  isModalActive: boolean;
  handleCancel: () => void;
  handleClose: () => void;
  handleSubmit?: () => void;
  title?: string;
  message?: string | ReactNode;
  cancelTextButton?: string;
  confirmTextButton?: string;
  loadingMessage?: string;
  isLoading?: boolean;
};
