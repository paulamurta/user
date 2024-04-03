import styled, { useTheme } from "styled-components";

export function headerStyle() {
  const { colors: theme } = useTheme();

  return {
    background: theme.components.mediumGray,
    border: "none",
    "& .MuiTableCell-head": {
      border: "none",
      color: theme.typography.blueGray,
      fontFamily: '"Inter SemilBold", sans-serif',
      fontSize: "clamp(0.4rem, 0.05rem + 1.9vh, 1.6rem)",
      fontWeight: "bold",
      paddingY: 1.2,
    },
  };
}

export const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0px 0px 3px #00000029;
  background-color: ${({ theme }) => theme.colors.components.table};
  border-radius: 0px 0px 5px 5px;
`;

export const Actions = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    height: 30px;
  }

  .icon-button {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.typography.mediumGray};

    &:disabled {
      color: ${({ theme }) => theme.colors.typography.mediumGray};
    }
  }
`;

export const Divider = styled.div`
  position: absolute;
  left: calc(50% - 49%);
  top: -1px;
  width: 98%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.components.menu};
`;

export const Empty = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;

  & img {
    height: 35vh;
  }

  strong {
    font-weight: 600;
  }
`;

export const Progress = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0px;
`;

export const IconBox = styled.div`
  display: flex;
  svg {
    color: ${({ theme }) => theme.colors.typography.mediumGray};
  }

  //desktops extra-grandes
  @media screen and (min-width: 2560px) and (max-width: 3840px) {
    height: 100%;
  }
`;
