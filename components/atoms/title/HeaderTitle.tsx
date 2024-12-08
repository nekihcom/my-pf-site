import { Typography } from "@mui/material";
import { FC, memo } from "react";

type Props = {
  text: string;
}

export const HeaderTitle:FC<Props> = memo((props) => {
  const {text} = props;

  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: "24px",
    }}>
      {text}
    </Typography>
  )
});
HeaderTitle.displayName = 'HeaderTitle';
