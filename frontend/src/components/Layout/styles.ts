import styled, { css } from "styled-components";
import { IBoxProps, IFooterProps } from "./types";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.components.backgroundGray};

  .content {
    height: 100%;
    width: 100%;
    position: relative;
    overflow-x: hidden;
  }

  .sidebar {
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.components.menu};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
  }
`;

export const FirstChildren = styled.div<IBoxProps>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3vh;
`;
export const LastChildren = styled.div<IBoxProps>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const Menu = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5vh;
  overflow-y: auto;

  button {
    border: none;
    background-color: transparent;
    width: auto;
  }

  .link {
    color: ${({ theme }) => theme.colors.typography.white};
    font-family: "Inter Regular", sans-serif;
    height: 5.5vh;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.components.hover};
      color: ${({ theme }) => theme.colors.typography.white};

      svg {
        stroke: ${({ theme }) => theme.colors.typography.white};
      }
    }

    .link-text {
      margin-left: 1.5vw;
      white-space: nowrap;
      font-size: clamp(0.15rem, 0.23rem + 1.5vh, 14px);
      font-family: "Inter Regular", sans-serif;
    }
    .active {
      font-family: "Inter Bold", sans-serif;
    }
  }

  .active {
    background-color: ${({ theme }) => theme.colors.components.activeBg};
    color: ${({ theme }) => theme.colors.components.active};
    border-left: 5px ${({ theme }) => theme.colors.components.active} solid;

    .link-text {
      font-weight: 600;
    }

    svg {
      stroke: ${({ theme }) => theme.colors.components.active};
    }
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    .link {
      height: 7vh;
    }
  }
`;

export const LogoBox = styled.div<IBoxProps>`
  ${(props) =>
    props.$isOpen
      ? css`
          padding: 2vw;
        `
      : css`
          img {
            padding: 4vw;
          }
        `}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  height: 20vh;
  img {
    width: 100%;
    min-width: 12vw;
    object-fit: cover;
  }

  @keyframes showSmall {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const IconBox = styled.div`
  svg {
    width: 1.2vw;
    height: 1.2vw;
    stroke: ${({ theme }) => theme.colors.typography.white};
  }
`;

export const Box = styled.div<IBoxProps>`
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;

  ${(props) =>
    props.$isOpen
      ? css`
          justify-content: flex-start;
          padding-left: 14px;
        `
      : css`
          justify-content: center;
        `}
`;

export const LogoutBtn = styled.button`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${({ theme }) => theme.colors.typography.white};
  font-family: "Inter Regular", sans-serif;
  font-weight: bold;
  font-size: clamp(0.2rem, 0.3rem + 1.7vh, 1rem);
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  background: ${({ theme }) => theme.colors.components.darkPurple};

  .link-text {
    padding-left: 16px;
    font-weight: 600;
    font-size: clamp(0.15rem, 0.23rem + 1.5vh, 1rem);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.components.hover};
  }
`;

export const Footer = styled.div<IFooterProps>`
  width: 100%;
  height: 11vh;
  display: flex;
  align-items: center;
  text-decoration: none;

  ${(props) =>
    props.$isOpen
      ? css`
          justify-content: flex-start;
          padding-left: 10px;
        `
      : css`
          justify-content: center;
        `}
`;

export const UserPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6vh;
  height: 6vh;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.components.placeholder};
  color: ${({ theme }) => theme.colors.typography.white};
  font-family: "Inter SemiBold", sans-serif;
  font-size: 2.5vh;
  font-weight: bold;
`;

export const UserName = styled.div`
  .text-name {
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.8vh;
    padding-left: 0.8vw;
  }
`;

export const BlueHeader = styled.div`
  width: 100%;
  height: 6vh;
  background-color: ${({ theme }) => theme.colors.components.header};
`;

export const ChildrenContainer = styled.main`
  width: 100%;
  height: 94vh;
  padding: 2%;
`;
