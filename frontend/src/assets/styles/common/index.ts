import styled, { css } from "styled-components";
import { IActionsButton, IDarkContainer } from "./types";
import { Variants, motion } from "framer-motion";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      type: "tween",
    },
  },
};

export const PageContainer = styled(motion.div).attrs(() => ({
  variants: containerVariants,
  initial: "hidden",
  animate: "visible",
}))`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.components.menu};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2%;
`;

export const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(90vh - 30px);
  height: 100vh;
  gap: 1rem;
`;

export const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 1.5rem;
`;

export const ActionsTop = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
`;

export const ActionsTopColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ActionsTopRow = styled.div`
  display: flex;
  gap: 1rem;

  align-items: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  gap: 1rem;
`;
export const RowContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  gap: 1rem;
`;

export const ActionsButton = styled.div<IActionsButton>`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1rem;
  ${(props) =>
    props.position == "left"
      ? css`
          justify-content: flex-start;
        `
      : props.position == "right"
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: center;
        `}
`;

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const DarkContainer = styled.div<IDarkContainer>`
  height: ${({ $height }) => ($height ? $height : "")};
  width: 100%;
  display: flex;
  flex-direction: ${({ $flexDirection }) =>
    $flexDirection === "column" ? "column" : "row"};
  padding: 3vw;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.components.mediumGray};
  box-shadow: 0px 0px 3px #00000029;
  gap: 2rem;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2rem;
`;
