import { useTheme } from "styled-components";
import { BreadCrumbsProps } from "./types";
import { Container, Breadcrumb, Link } from "./styles";
import { CgFormatSlash } from "react-icons/cg";
import { Stack } from "@mui/material";

export function BreadCrumbs({ links }: BreadCrumbsProps) {
  const { colors: theme } = useTheme();

  return (
    <Container>
      <Stack spacing={2}>
        <Breadcrumb
          separator={<CgFormatSlash color={theme.typography.mediumGray} />}
          aria-label="breadcrumb"
          sx={{ fontSize: "clamp(0.1rem, 0.1rem + 1.2vh, 2rem)" }}
        >
          {links?.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              underline="none"
              aria-current="page"
              fontSize="clamp(0.1rem, 0.1rem + 1.2vh, 2rem)"
              fontFamily='"Inter Bold", sans-serif'
              sx={{
                color: theme.typography.mediumGray,
                fontWeight: "300",
              }}
            >
              {link?.name}
            </Link>
          ))}
        </Breadcrumb>
      </Stack>
    </Container>
  );
}
