import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { BasicTableProps } from "./types";
import { organizeData } from "./utils/organizedData";
import { Row } from "./components/Row";
import { useTheme } from "styled-components";
import { Empty, Progress, Wrapper, headerStyle } from "./styles";
import EmptyTableImg from "../../assets/images/empty-table.png";
import { Header2, Header4 } from "../../assets/styles/typography";
import { CircularProgressStyled } from "../CircularProgressTable/styles";

export default function BasicTable({
  id,
  data,
  headers,
  loading,
  emptyMessage,
  instruction,
  enableActions,
  canChangeStatus,
  canDelete,
  canEdit,
  onChangeStatus,
  onDelete,
  onEdit,
}: BasicTableProps) {
  const { colors: theme } = useTheme();
  const [organizedData, indexedHeader] = organizeData(data, headers);

  if (data?.length === 0 && !loading) {
    return (
      <Wrapper>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow></TableRow>
          </TableHead>
          <Empty>
            <img src={EmptyTableImg} />
            <Header2>{emptyMessage}</Header2>
            <Header4 $fontColor={theme.typography.mediumGray}>
              {instruction}
            </Header4>
          </Empty>
        </Table>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Table sx={{ width: "100%" }} aria-label="simple table" id={id}>
        <TableHead>
          <TableRow sx={headerStyle()}>
            {headers?.map((header, index) => {
              return (
                <TableCell
                  key={index}
                  sx={{
                    paddingLeft: headers.length === 1 ? "3rem" : "",
                    width: header.columnWidth ? header.columnWidth : "",
                  }}
                  align={header.leftHeader ? "left" : "center"}
                >
                  {header.value}
                </TableCell>
              );
            })}

            {enableActions && (
              <TableCell sx={{ width: "100%" }} align="center">
                Ações
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {!loading &&
            organizedData?.map((row: any, i: number) => {
              return (
                <Row
                  i={i}
                  headers={headers}
                  indexedHeader={indexedHeader}
                  row={row}
                  enableActions={enableActions}
                  onEdit={onEdit}
                  canEdit={canEdit}
                  onChangeStatus={onChangeStatus}
                  canChangeStatus={canChangeStatus}
                  onDelete={onDelete}
                  canDelete={canDelete}
                  key={`row-${i}`}
                />
              );
            })}
        </TableBody>
      </Table>
      {loading && (
        <Progress>
          <CircularProgressStyled />
        </Progress>
      )}
    </Wrapper>
  );
}
