import { Container } from "@mui/material";
import { FC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode
}

export const GlobalContainer:FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Container maxWidth="md">{ children }</Container>
  )
});