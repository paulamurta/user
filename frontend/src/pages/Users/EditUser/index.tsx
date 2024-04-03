import { useQuery } from "react-query";
import { ButtonMain } from "../../../components/Button/ButtonMain";
import { DefaultInput } from "../../../components/Input/DefaultInput";
import { ModalProps } from "../../../interfaces/IGlobal";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalConfirm } from "../../../components/Modal/ModalConfirm";
import { useErrors } from "../../../context/hooks/useErrors";
import { FormGroup } from "../../../components/FormGroup";
import { ModalEdit } from "../../../components/Modal/ModalEdit";
import { ActionsButton, ActionsTop, Form } from "../../../assets/styles/common";
import { Header2 } from "../../../assets/styles/typography";
import api from "../../../services/Api";
import toast from "react-hot-toast";
import { HandleInput } from "../../../common/utils/format/formatInput";
import { FormatInputType } from "../../../common/utils/format/enums.";

export function EditUser({ isModalActive, closeModal, keyId }: ModalProps) {
  const navigate = useNavigate();

  const [id, setId] = useState<number | string | undefined>(0);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);
  const { removeError, getErrorMessageByFieldName, setError } = useErrors();

  const { data: userData } = useQuery(
    ["keyId", id, isModalActive],
    () => api.get(`user${id != null ? "/" + id : ""}`),
    {
      onSuccess: (dataOnSuccess) => {
        if (isModalActive) {
          setUserName(dataOnSuccess.data.user_name);
          setUserEmail(dataOnSuccess.data.user_email);
        }
      },
    }
  );

  const isFormValid =
    userData?.data.user_name !== userName ||
    userData?.data.user_email !== userName;

  function handleCloseModal() {
    setUserName("");
    setUserEmail("");
    closeModal();
    navigate("/users");
    setIsModalConfirmOpen(false);
    removeError("user-name");
    removeError("profile");
    removeError("email");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = {
      user_name: userName,
      user_email: userEmail,
    };

    await api
      .put(`user/${keyId}`, payload)
      .then(() => {
        toast.success("Dados salvos com sucesso.");
        handleCloseModal();
      })
      .catch(() => {
        toast.error("Ocorreu um erro");
      });
  }

  useEffect(() => {
    setId(keyId);
  }, [keyId]);

  return (
    <>
      <ModalConfirm
        isModalActive={isModalConfirmOpen}
        handleCancel={() => setIsModalConfirmOpen(false)}
        handleClose={handleCloseModal}
      />
      <ModalEdit isModalActive={isModalActive}>
        <Form onSubmit={handleSubmit}>
          <Header2>Editar Usuário</Header2>
          <ActionsTop>
            {userName && (
              <FormGroup
                width={"100%"}
                error={getErrorMessageByFieldName("user-name")}
              >
                <DefaultInput
                  error={!!getErrorMessageByFieldName("user-name")}
                  width="100%"
                  height="80px"
                  id="user_name"
                  label="Nome"
                  value={userName}
                  onChange={(event) =>
                    HandleInput.getInstance().formatWithRegex(
                      event,
                      FormatInputType.USER_NAME,
                      setUserName,
                      setError,
                      removeError,
                      "user-name"
                    )
                  }
                />
              </FormGroup>
            )}
          </ActionsTop>
          {userEmail && (
            <FormGroup
              width={"100%"}
              error={getErrorMessageByFieldName("user-email")}
            >
              <DefaultInput
                error={!!getErrorMessageByFieldName("user-email")}
                width="100%"
                height="80px"
                id="user_email"
                label="E-mail"
                value={userEmail}
                onChange={(event) =>
                  HandleInput.getInstance().formatWithRegex(
                    event,
                    FormatInputType.USER_EMAIL,
                    setUserEmail,
                    setError,
                    removeError,
                    "user-email"
                  )
                }
              />
            </FormGroup>
          )}

          <ActionsButton position="right">
            <ButtonMain
              $style="secondary"
              label={"Cancelar"}
              type="button"
              onClick={() => setIsModalConfirmOpen(true)}
              width={"8vw"}
            />
            <ButtonMain
              label={"Salvar"}
              type="submit"
              width={"8vw"}
              disabled={!isFormValid}
            />
          </ActionsButton>
        </Form>
      </ModalEdit>
    </>
  );
}
