import { ReactNode } from "react";

export interface Paginate {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface BaseGuideProps {
  dataPagination?: Paginate;
  textActive?: string;
  textInactive?: string;
  showOnOff?: boolean;
  onOff?: boolean;
  setOnOff?: (e: boolean) => void;
  onChangeChartToggle?: () => void;
  togglewidth?: string;
  setPageParam: (e: number) => void;
  setSearchParam: (e: string) => void;
  canSearch?: boolean;
  pageTitle: string;
  buttonText: string;
  buttonPath?: string;
  links?: any;
  buttonOnclick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  canCreate?: boolean;
  filters?: ReactNode;
  children: ReactNode;
  toggleChart?: boolean;
}
