import { Typography } from "@mui/material";
import { FC, memo } from "react";
import { grey } from '@mui/material/colors';


type Props = {
  text: string;
}

export const HeaderTitle:FC<Props> = memo((props) => {
  const {text} = props;

  return (
    <Typography
      variant="h1"
      sx={{
        fontWeight:700,
        fontSize: "24px",
        color:grey[900], 
        fontFamily:'inherit'
    }}>
      {text}
    </Typography>
  )
});
HeaderTitle.displayName = 'HeaderTitle';
