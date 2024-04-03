import { motion, Variants } from "framer-motion";
import styled from "styled-components";

const containerVariants: Variants = {
  hidden: {
    x: 0,
    y: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.4,
    },
  },
};

export const Overlay = styled.div`
  z-index: 101;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;

export const ContainerConfirm = styled(motion.div).attrs(() => ({
  variants: containerVariants,
  initial: "hidden",
  animate: "visible",
}))`
  width: 60%;
  max-width: 400px;
  max-height: 450px;
  background-color: ${({ theme }) => theme.colors.components.mediumGray};
  border-radius: 4px;
  box-shadow: 9px 8px 20px #00000029;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 2rem;
  gap: 2rem;
  z-index: 9999;

  .text-group {
    h1 {
      font-size: 26px;
      margin-bottom: 24px;
    }

    span {
      font-size: 16px;
      letter-spacing: 0px;
    }
  }
`;

export const ContainerLogout = styled(motion.div).attrs(() => ({
  variants: containerVariants,
  initial: "hidden",
  animate: "visible",
}))`
  background: ${({ theme }) => theme.colors.components.mediumGray};
  border-radius: 4px;
  width: clamp(0px, 80vw, 400px);
  max-height: 90vh;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  gap: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 30px;
  text-align: center;

  .text-group {
    h1 {
      font-size: 24px;
    }
  }

  .close-icon {
    color: #737373;
    font-size: 1.2rem;
    border: 0;
    background-color: transparent;
    align-self: flex-end;

    border-radius: 50%;
    width: 10%;
    height: 10%;

    transition: background-color 0.2s ease;

    &:hover {
      background-color: #ccc;
    }
  }
`;

export const ContainerEdit = styled(motion.div).attrs(() => ({
  variants: containerVariants,
  initial: "hidden",
  animate: "visible",
}))`
  background: ${({ theme }) => theme.colors.components.mediumGray};
  border-radius: 6px;
  width: 50%;
  max-height: 90vh;
  box-shadow: 9px 8px 20px #00000029;
  z-index: 8888;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
  text-align: center;
`;
