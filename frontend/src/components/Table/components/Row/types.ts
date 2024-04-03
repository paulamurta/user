import { ITableHeader } from "../../types";
import { IndexedHeader, OrganizedItem } from "../../utils/organizedData";

export type RowProps = {
  i: number;
  headers: ITableHeader[];
  enableActions?: boolean;
  canChangeStatus?: boolean;
  canEdit?: boolean;
  canDelete?: boolean;

  onChangeStatus?: (item: any) => void;
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;

  indexedHeader: IndexedHeader;
  row: OrganizedItem;
};
