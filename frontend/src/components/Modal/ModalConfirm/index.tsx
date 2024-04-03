import ReactDOM from "react-dom";
import { ModalProps } from "./types";
import { ButtonMain } from "../../Button/ButtonMain";
import { ContainerConfirm, Overlay } from "../../../assets/styles/modal/styles";
import { Body3, Header2 } from "../../../assets/styles/typography";
import { ActionsButton } from "../../../assets/styles/common";

export const ModalConfirm = ({
  isModalActive,
  handleCancel,
  handleClose,
  handleSubmit,
  title,
  message,
  cancelTextButton,
  confirmTextButton,
  isLoading,
}: ModalProps) => {
  const modalRoot = document.getElementById("modal") as HTMLElement;

  if (!isModalActive) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <ContainerConfirm>
        {title ? (
          <Header2>{title}</Header2>
        ) : (
          <Header2>{"Tem certeza que gostaria de cancelar?"}</Header2>
        )}
        {message ? (
          <Body3>{message}</Body3>
        ) : (
          <Body3>{"Ao cancelar, os dados inseridos não serão salvos."}</Body3>
        )}
        <ActionsButton>
          <ButtonMain
            onClick={handleCancel}
            $style="secondary"
            label={cancelTextButton ? cancelTextButton : "Não"}
            width="100%"
            disabled={isLoading}
          />
          <ButtonMain
            onClick={() => (handleSubmit ? handleSubmit() : handleClose())}
            label={confirmTextButton ? confirmTextButton : "Sim"}
            width="100%"
            disabled={isLoading}
            isLoading={isLoading}
          />
        </ActionsButton>
      </ContainerConfirm>
    </Overlay>,
    modalRoot
  );
};
