import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { IToastProps } from "./types";

export const ContainerBox = styled.div`
  position: absolute;
  right: 0;
  z-index: 99999;
`;

export const Box = styled(motion.div)<IToastProps>`
  ${({ isLoginToast, theme }) => css`
    display: flex;
    width: ${isLoginToast ? "100%" : "25vw"};
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.actions.error};
    border-radius: 4px;
    opacity: 1;
    padding: 1rem;
    gap: 1rem;
    margin: ${isLoginToast ? "" : "1rem"};
    p {
      color: ${theme.colors.typography.white};
      font-family: "Inter Bold";
      font-size: clamp(0.2rem, 0.3rem + 1.4vh, 1.5rem);
    }

    button {
      border: none;
      background: transparent;
      svg {
        height: 20px;
        width: 20px;
      }
    }
    svg {
      height: 24px;
      width: 24px;
      stroke: ${theme.colors.typography.white};
      fill: ${theme.colors.typography.white};
    }

    &.toast-success {
      background-color: ${theme.colors.actions.success};
    }

    &.toast-custom {
      background-color: ${theme.colors.actions.warning};
      color: black;
    }
  `}
`;

export const Divider = styled.hr`
  width: 75%;
  border: ${({ theme }) => `0.8px solid ${theme.colors.typography.white}`};
  border-radius: 100%;
  align-items: center;
`;

export const BoxIcon = styled.div`
  display: flex;
  gap: 0.5rem;
`;
