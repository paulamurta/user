export interface IRoute {
  path: string;
  breadcrumb: string | null;
  icon?: JSX.Element;
  children?: IChildren[];
}

export interface IChildren {
  path: string;
  breadcrumb: string;
}
