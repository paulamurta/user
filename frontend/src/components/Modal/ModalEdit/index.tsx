import ReactDOM from "react-dom";

import { ModalProps } from "./types";
import { ContainerEdit, Overlay } from "../../../assets/styles/modal/styles";

export function ModalEdit({ isModalActive, children }: ModalProps) {
  const modalRoot = document.getElementById("modal") as HTMLElement;

  if (!isModalActive) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <ContainerEdit>{children}</ContainerEdit>
    </Overlay>,
    modalRoot
  );
}
