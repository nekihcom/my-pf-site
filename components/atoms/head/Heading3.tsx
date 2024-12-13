import { Typography } from "@mui/material";
import { FC, memo } from "react";

type Props = {
  children: string;
};

const Heading3:FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Typography variant='h3' sx={{fontWeight: 700, fontSize: '24px'}}>{children}</Typography>
    </>
  )
});

export default Heading3;
Heading3.displayName = 'Heading3';