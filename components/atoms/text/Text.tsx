import { Typography } from "@mui/material";
import { FC, memo } from "react";

type Props = {
  fontsize?: number;
  children: string;
};

const Text:FC<Props> = memo((props) => {
  const { fontsize=16, children } = props;

  return (
    <>
      <Typography variant='body1' sx={{fontSize:fontsize, fontFamily:'inherit'}}>{children}</Typography>
    </>
  )
});

export default Text;
Text.displayName = 'Text';