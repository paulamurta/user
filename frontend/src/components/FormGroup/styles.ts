import styled from "styled-components";

import { FormGroupProps } from "./types";

export const Container = styled.div<FormGroupProps>`
  width: ${({ width }) => (width ? width : "100%")};
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  gap: 0.7vh;

  small {
    color: ${({ theme }) => theme.colors.actions.error};
    font-size: clamp(0.15rem, 0.11rem + 1.3vh, 2.45rem);
    font-family: "Inter Regular";
    position: relative;
    left: 0.7vw;
  }
`;
