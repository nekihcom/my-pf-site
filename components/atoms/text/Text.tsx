import { Typography } from "@mui/material";
import { FC, memo } from "react";

type Props = {
  children: string;
};

const Text:FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Typography variant='body1' sx={{fontSize: '16px'}}>{children}</Typography>
    </>
  )
});

export default Text;
Text.displayName = 'Text';