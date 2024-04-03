import styled, { css } from "styled-components";

import { ButtonMainProps } from "./types";

export const ButtonCreateContainer = styled.button<ButtonMainProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 16px;
  font-family: "Inter SemiBold", sans-serif;
  width: ${({ width }) => (width ? width : "10vw")};
  height: ${({ height }) => (height ? height : "5vh")};
  color: ${({ theme }) => theme.colors.button.primary.text};
  background-color: ${({ theme }) => theme.colors.button.primary.bg};
  border: none;
  border-radius: 8px;
  font-size: clamp(0.8rem, 0.2rem + 1.45vh, 2.5rem);
  transition: all 0.4s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.primary.hoverBg};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.button.primary.disabledBg};
    color: ${({ theme }) => theme.colors.button.primary.disabledText};
  }

  ${({ $style }) =>
    $style == "secondary" &&
    css`
      background-color: ${({ theme }) => theme.colors.button.secondary.bg};
      color: ${({ theme }) => theme.colors.button.secondary.text};
      border: solid 2px ${({ theme }) => theme.colors.button.secondary.border};

      &:hover {
        background-color: ${({ theme }) =>
          theme.colors.button.secondary.hoverBg};
        color: ${({ theme }) => theme.colors.button.secondary.hoverText};
        border-color: ${({ theme }) =>
          theme.colors.button.secondary.hoverBorder};
      }

      &:disabled {
        background-color: ${({ theme }) =>
          theme.colors.button.secondary.disabledBg};
        color: ${({ theme }) => theme.colors.button.secondary.disabledText};
        border: solid 2px
          ${({ theme }) => theme.colors.button.secondary.disabledBorder};
      }
    `}

  ${({ $style }) =>
    $style == "tertiary" &&
    css`
      background-color: ${({ theme }) => theme.colors.button.tertiary.bg};
      color: ${({ theme }) => theme.colors.button.tertiary.text};
      border: solid 2px ${({ theme }) => theme.colors.button.tertiary.border};

      &:hover {
        background-color: ${({ theme }) =>
          theme.colors.button.tertiary.hoverBg};
        color: ${({ theme }) => theme.colors.button.tertiary.hoverText};
        border-color: ${({ theme }) =>
          theme.colors.button.tertiary.hoverBorder};
      }

      &:disabled {
        color: ${({ theme }) => theme.colors.button.secondary.disabledText};
        border-color: ${({ theme }) =>
          theme.colors.button.secondary.disabledBorder};
        background-color: ${({ theme }) =>
          theme.colors.button.tertiary.disabledBg};
      }
    `}
`;
