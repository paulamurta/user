import styled, { css } from "styled-components";

interface ITypography {
  $fontColor?: string;
}

export const Header1 = styled.h1<ITypography>`
  ${({ theme, $fontColor }) => css`
    font-size: clamp(1.2rem, 1rem + 3.5vh, 5rem);
    font-family: "Inter Bold", sans-serif;
    color: ${$fontColor ? $fontColor : theme.colors.typography.text};
  `}
`;

export const Header2 = styled.h2<ITypography>`
  ${({ theme, $fontColor }) => css`
    font-size: clamp(1.2rem, 0.3rem + 2.2vh, 5rem);
    font-family: "Inter Bold", sans-serif;
    color: ${$fontColor ? $fontColor : theme.colors.typography.text};
  `}
`;

export const Header3 = styled.h2<ITypography>`
  ${({ theme, $fontColor }) => css`
    font-size: clamp(1.2rem, 0.3rem + 2vh, 5rem);
    font-family: "Inter Bold", sans-serif;
    color: ${$fontColor ? $fontColor : theme.colors.typography.text};
  `}
`;

export const Header4 = styled.h4<ITypography>`
  ${({ theme, $fontColor }) => css`
    font-size: clamp(1.2rem, 0.3rem + 2vh, 5rem);
    font-family: "Inter Regular", sans-serif;
    color: ${$fontColor ? $fontColor : theme.colors.typography.title};
  `}
`;

export const Body1 = styled.p<ITypography>`
  ${({ theme, $fontColor }) => css`
    font-size: clamp(1.2rem, 0.3rem + 2vh, 5rem);
    font-family: "Inter Regular", sans-serif;
    color: ${$fontColor ? $fontColor : theme.colors.typography.text};
  `}
`;

export const Body3 = styled.p<ITypography>`
  ${({ theme, $fontColor }) => css`
    font-size: clamp(1.2rem, 0.2rem + 1.5vh, 4rem);
    font-family: "Inter Regular", sans-serif;
    color: ${$fontColor ? $fontColor : theme.colors.typography.mediumGray};
  `}
`;

export const LabelText = styled.p<ITypography>`
  ${({ theme, $fontColor }) => css`
    font-size: clamp(0.2rem, 0.3rem + 1.7vh, 1rem);
    font-family: "Inter Bold", sans-serif;
    color: ${$fontColor ? $fontColor : theme.colors.typography.white};
  `}
`;

export const Small = styled.small<ITypography>`
  ${({ theme, $fontColor }) => css`
    font-size: clamp(0.1rem, 0.15rem + 1.2vh, 2rem);
    font-family: "Inter Regular", sans-serif;
    color: ${$fontColor ? $fontColor : theme.colors.typography.white};
  `}
`;

export const Information = styled.small<ITypography>`
  ${({ theme, $fontColor }) => css`
    font-size: clamp(0.1rem, 0.25rem + 1.3vh, 2.2rem); //13px
    text-wrap: no-wrap;
    font-family: "Inter Medium", sans-serif;
    color: ${$fontColor ? $fontColor : theme.colors.typography.text};
  `}
`;
