import styled from "styled-components";
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
  /* overflow: hidden; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
`;

export const LeftContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1rem;
  padding: 6%;
  text-align: right;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  img {
    height: 100%;
  }
`;
