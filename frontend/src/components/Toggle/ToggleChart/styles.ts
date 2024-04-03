import styled, { css } from "styled-components";
import { toggleChartProps } from "./types";

export const ToggleContainer = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.colors.components.activeBg};
  border-radius: 6px;
  height: 5.5vh;
  box-sizing: border-box;
  padding: 1px;
  gap: 1px;

  & :first-child {
    & button {
      border-radius: 5px 0 0 5px;
    }
  }

  & :last-child {
    & button {
      border-radius: 0 5px 5px 0;
    }
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    height: 7vh;
  }
`;

export const Toggle = styled.div<toggleChartProps>`
  display: flex;
  height: 100%;

  button {
    color: ${({ theme }) => theme.colors.typography.body};
    height: 100%;
    border: none;
    width: 5.5vh;
    background-color: ${({ theme }) => theme.colors.components.placeholder};
    transition: all 0.2s ease-in-out;

    ${({ $isActive }) =>
      $isActive &&
      css`
        background-color: ${({ theme }) => theme.colors.components.active};
        transition: all 0.2s ease-in-out;
      `}

    & svg {
      height: 45%;
      width: 45%;
      color: ${({ theme }) => theme.colors.components.placeholder};
    }

    @media screen and (min-width: 1280px) and (max-width: 1919px) {
      width: 7vh;
    }
  }
`;
