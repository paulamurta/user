export interface ITableHeader {
  key: string;
  value: string;
  leftHeader?: boolean;
  leftBody?: boolean;
  columnWidth?: string;
  tab?: boolean;
}

export type BasicTableProps = {
  id?: string;
  headers: ITableHeader[];
  data: any[];
  loading?: boolean;
  emptyMessage?: string;
  instruction?: string | JSX.Element;
  enableActions?: boolean;
  canChangeStatus?: boolean;
  canEdit?: boolean;
  canDelete?: boolean;

  onChangeStatus?: (item: any) => void;
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
};
