import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateUserForm } from "./styles";
import { PageContainer } from "../../Home/styles";
import { Breadcrumb } from "../../../components/BreadCrumbs/styles";
import { Header2 } from "../../../assets/styles/typography";
import {
  ActionsButton,
  ColumnContainer,
  DarkContainer,
} from "../../../assets/styles/common";
import { FormGroup } from "../../../components/FormGroup";
import { DefaultInput } from "../../../components/Input/DefaultInput";
import { useErrors } from "../../../context/hooks/useErrors";
import { ButtonMain } from "../../../components/Button/ButtonMain";
import { ModalConfirm } from "../../../components/Modal/ModalConfirm";
import { HandleInput } from "../../../common/utils/format/formatInput";
import { FormatInputType } from "../../../common/utils/format/enums.";
import api from "../../../services/Api";
import toast from "react-hot-toast";

export function NewUser() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);
  const { errors, getErrorMessageByFieldName, setError, removeError } =
    useErrors();

  const navigate = useNavigate();

  const isFormValid = errors.length == 0 && userName && userEmail;

  function goToUserList() {
    navigate("/users");
  }

  async function onSaveFields() {
    const body = {
      user_name: userName,
      user_email: userEmail,
    };
    await api
      .post("user", body)
      .then(() => {
        toast.success("Usuário criado com sucesso");
        goToUserList();
      })
      .catch(() => {
        toast.error("Ocorreu um erro");
      });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSaveFields();
  }

  const BREADCRUMBS_LINKS = [
    {
      id: 1,
      name: "Usuários",
      path: "/users",
    },
    {
      id: 2,
      name: " Cadastro de Usuários",
      path: "/users/new",
    },
  ];

  return (
    <PageContainer>
      <ModalConfirm
        title="Tem certeza que gostaria de cancelar?"
        message="Ao cancelar os dados inseridos não serão salvos."
        isModalActive={isModalConfirmOpen}
        handleCancel={() => setIsModalConfirmOpen(false)}
        handleClose={() => {
          setIsModalConfirmOpen(false);
          goToUserList();
        }}
      />

      <Breadcrumb links={BREADCRUMBS_LINKS} />
      <CreateUserForm noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Header2>Cadastro de Usuários</Header2>

        <DarkContainer $flexDirection="column">
          <ColumnContainer>
            <FormGroup
              width={"100%"}
              error={getErrorMessageByFieldName("user-name")}
            >
              <DefaultInput
                error={!!getErrorMessageByFieldName("user-name")}
                width="100%"
                placeholder="Nome*"
                id="user-name"
                value={userName}
                disabled={false}
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

            <FormGroup
              width={"100%"}
              error={getErrorMessageByFieldName("user-email")}
            >
              <DefaultInput
                error={!!getErrorMessageByFieldName("user-email")}
                width="100%"
                placeholder="Email*"
                id="user-email"
                value={userEmail}
                disabled={false}
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
          </ColumnContainer>

          <ActionsButton position="right">
            <ButtonMain
              $style="secondary"
              label={"Cancelar"}
              type="button"
              onClick={() => setIsModalConfirmOpen(true)}
              width={"12vw"}
            />
            <ButtonMain
              label={"Salvar"}
              type="submit"
              width={"12vw"}
              disabled={!isFormValid}
            />
          </ActionsButton>
        </DarkContainer>
      </CreateUserForm>
    </PageContainer>
  );
}
