/* eslint-disable @typescript-eslint/no-explicit-any */
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Actions, IconBox } from "../.././styles";
import { TbPencil } from "react-icons/tb";
import { FiTrash2 } from "react-icons/fi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { Divider } from "../../styles";
import { rowStyles } from "./styles";
import { RowProps } from "./types";
import { IconButton } from "../../../Button/IconButton";
import { Switch } from "../../../Switch";

export function Row({
  i,
  headers,
  indexedHeader,
  row,
  enableActions,
  onEdit,
  canEdit,
  onChangeStatus,
  canChangeStatus,
  onDelete,
  canDelete,
}: RowProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow key={`${i}-table`} sx={rowStyles("primary")}>
        {Object.keys(row).map((item, index) => {
          if (item === "$original") {
            return null;
          }
          return (
            <TableCell
              key={`${index}-row`}
              sx={{
                paddingLeft: headers.length === 1 ? "3rem" : "",
                width: indexedHeader[item].columnWidth || "",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
              align={indexedHeader[item].leftBody ? "left" : "center"}
            >
              {item === "accordion" ? (
                row.accordion ? (
                  <IconButton
                    aria-label="expand row"
                    onClick={() => setOpen(!open)}
                    Icon={!open ? FiChevronDown : FiChevronUp}
                    size="small"
                  />
                ) : (
                  ""
                )
              ) : (
                row[item] || "-"
              )}
            </TableCell>
          );
        })}
        {enableActions && (
          <TableCell key={`${i}-row-actions`}>
            <Actions>
              {onEdit && (
                <button
                  className="icon-button"
                  onClick={() => onEdit && onEdit(row.$original)}
                  title={"editar"}
                  disabled={!canEdit}
                >
                  <IconBox>
                    <TbPencil size={24} />
                  </IconBox>
                </button>
              )}

              {onChangeStatus && (
                <Switch
                  checked={row.$original.status}
                  onChange={() => {
                    if (onChangeStatus) {
                      onChangeStatus(row.$original);
                    }
                  }}
                  active={!canChangeStatus}
                  title="Ativar/Desativar"
                />
              )}

              {onDelete && (
                <button
                  className="icon-button"
                  onClick={() => onDelete && onDelete(row.$original)}
                  title={"Deletar"}
                  disabled={!canDelete}
                >
                  <IconBox>
                    <FiTrash2 size={24} />
                  </IconBox>
                </button>
              )}
            </Actions>
          </TableCell>
        )}
        {/* <Divider /> */}
      </TableRow>
      {open && (
        <TableRow>
          <TableCell
            sx={{ border: "none", padding: 0 }}
            colSpan={headers.length}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table sx={{ width: "100%" }} aria-label="simple table">
                <TableBody>
                  {row["$original"]?.subData?.map(
                    (subRow: any, iSubRow: number) => {
                      return (
                        <TableRow
                          key={`${iSubRow}-table`}
                          sx={rowStyles("secondary")}
                        >
                          {Object.keys(subRow).map((subItem, subIndex) => {
                            return (
                              <TableCell
                                key={`${subIndex}-sub-row`}
                                sx={{
                                  paddingLeft:
                                    headers.length === 1 ? "3rem" : "",
                                  width:
                                    indexedHeader[subItem].columnWidth || "",
                                  "&.MuiTableCell-root": {
                                    border: "none",
                                  },
                                }}
                                align={
                                  indexedHeader[subItem].leftBody
                                    ? "left"
                                    : "center"
                                }
                              >
                                {subRow[subItem] || ""}
                              </TableCell>
                            );
                          })}
                          <Divider />
                        </TableRow>
                      );
                    }
                  )}
                </TableBody>
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}
