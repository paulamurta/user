import styled from "styled-components";
import { Breadcrumbs, Link as Links } from "@mui/material";

export const Container = styled.div`
  .MuiBreadcrumbs-separator {
    margin: 0;
  }
`;

export const Breadcrumb = styled(Breadcrumbs)<any>`
  .MuiBreadcrumbs-separator {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
  }
  color: ${({ theme }) => theme.colors.typography.mediumGray};
`;

export const Link = styled(Links)<any>`
  font-size: 12;
  color: ${({ theme }) => theme.colors.components.background};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "")};
`;
