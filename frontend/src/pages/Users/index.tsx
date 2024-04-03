import { useState } from "react";
import { BaseGuide } from "../../components/BaseGuide";
import { IUser } from "../../interfaces/IGlobal";
import { PageContainer } from "../../assets/styles/common";
import { ITableHeader } from "../../components/Table/types";
import { useQuery } from "react-query";
import { passPage } from "../../assets/styles/common/utils/format/global";
import BasicTable from "../../components/Table";
import toast from "react-hot-toast";
import api from "../../services/Api";
import { EditUser } from "./EditUser";

export function User() {
  const [user, setUser] = useState<IUser>();
  const [onOff, setOnOff] = useState(true);
  const [searchParam, setSearchParam] = useState("");
  const [pageParam, setPageParam] = useState(1);
  const [modalEditUser, setModalEditUser] = useState(false);
  const [tableData, setTableData] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { data, refetch } = useQuery(
    ["user", searchParam, pageParam, onOff],
    () => {
      setIsLoading(true);
      const params = new URLSearchParams();

      params.append("page", pageParam.toString());
      if (searchParam.length > 0) params.append("search_name", searchParam);
      params.append("limit", "10");
      params.append("orderBy", "NAME");
      params.append("sort", "ASC");
      params.append("user_status", String(Number(onOff)));

      return api.get("user", { params });
    },
    {
      onSuccess: (dataOnSuccess) => {
        const newData = dataOnSuccess.data.items.map(
          (item: IUser): IUser => ({
            user_email: item?.user_email,
            user_name: item?.user_name,
            user_status: item?.user_status,
            user_id: item?.user_id,
          })
        );

        setTableData(newData);
        setIsLoading(false);
        passPage(dataOnSuccess, pageParam, setPageParam);
      },
    }
  );

  const headers: ITableHeader[] = [
    {
      key: "user_name",
      value: "Nome",
      columnWidth: "50%",
      leftBody: true,
      leftHeader: true,
    },
    {
      key: "user_email",
      value: "E-mail",
      columnWidth: "50%",
      leftBody: true,
      leftHeader: true,
    },
  ];

  function changeLocalStatus(selectedUser: IUser) {
    const newData = [...tableData];
    const i = newData.findIndex(
      (e: IUser) => e.user_id === selectedUser.user_id
    );

    newData[i] = { ...newData[i], user_status: !selectedUser?.user_status };
    setTableData(newData);
  }

  async function handleChangeStatus(selectedUser: IUser) {
    changeLocalStatus(selectedUser);
    api
      .patch(`user/status/${selectedUser.user_id}`)
      .then(async () => {
        toast.success("Status alterado com sucesso");
        setTimeout(() => refetch(), 100);
      })
      .catch(async () => {
        toast.error("Ocorreu um erro");
        refetch();
      });
  }

  function handleEdit(user: IUser) {
    setUser(user);
    setModalEditUser(!modalEditUser);
  }

  const BREADCRUMBS_LINKS = [
    {
      id: 1,
      name: "Usuários",
      path: "/users",
    },
    {
      id: 2,
      name: " Listagem de Usuários",
      path: "/users/new",
    },
  ];

  return (
    <PageContainer>
      <EditUser
        isModalActive={modalEditUser}
        closeModal={() => {
          refetch();
          setModalEditUser(!modalEditUser);
        }}
        keyId={user?.user_id}
      />
      <BaseGuide
        pageTitle="Listagem de Usuários"
        buttonText="Cadastrar Novo Usuário"
        buttonPath="/users/new"
        onOff={onOff}
        setOnOff={setOnOff}
        setPageParam={setPageParam}
        setSearchParam={setSearchParam}
        dataPagination={data?.data?.meta}
        canCreate={true}
        links={BREADCRUMBS_LINKS}
        showOnOff={true}
        canSearch
      >
        <BasicTable
          headers={headers}
          data={tableData}
          emptyMessage={"Sem Usuário(s) cadastrado(s)"}
          instruction={
            "Clique em Cadastrar Novo Usuário para começar a cadastrar."
          }
          enableActions
          onChangeStatus={handleChangeStatus}
          canChangeStatus={true}
          onEdit={handleEdit}
          canEdit={true}
          loading={isLoading}
        />
      </BaseGuide>
    </PageContainer>
  );
}
