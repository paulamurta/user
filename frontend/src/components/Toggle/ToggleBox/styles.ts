import styled, { css } from "styled-components";
import { IToggleBox } from "./types";

export const ToggleContainer = styled.section`
  display: flex;
`;

export const Toggle = styled.div<IToggleBox>`
  display: flex;
  border-bottom: 1px solid #ccc;
  min-width: ${({ togglewidth }) => (togglewidth ? togglewidth : "")};

  button {
    font-size: clamp(0.15rem, 0.3rem + 1.2vh, 3rem);
    font-family: "Inter Bold";
    white-space: nowrap;
    text-align: left;
    color: ${({ theme }) => theme.colors.typography.mediumGray};
    border: none;
    background-color: transparent;
    min-width: 6vw;
    padding: 0 20px 0 0;
    height: 6vh;

    ${({ $isActive }) =>
      $isActive &&
      css`
        color: ${({ theme }) => theme.colors.typography.lightGray};
      `}
  }

  &:hover {
    border-width: 3.5px;
    border-color: ${({ theme }) => theme.colors.typography.lightGray};
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      border-width: 3.5px;
      border-color: ${({ theme }) => theme.colors.typography.lightGray};
    `}
`;
