import React, { FC, memo } from "react";
import { Box, Typography } from "@mui/material";
import { grey } from '@mui/material/colors';


type Props = {
  title: string;
  text: string;
}

export const ProfileItem:FC<Props> = memo((props) => {
  const { title, text } = props;

  const replacedTexts = text.split(/(\n)/).map((item, index) => {
    return (
      <React.Fragment key={index}>
        { item.match(/\n/) ? <br /> : item }
      </React.Fragment>
    );
  });

  return (
    <Box sx={{mb:1}}>
      <Typography sx={{fontWeight:700, color:grey[800], fontFamily:'inherit'}}>{ title }</Typography>
      <Typography sx={{fontFamily:'inherit'}}>{ replacedTexts }</Typography>
    </Box>
  )
});
ProfileItem.displayName = 'ProfileItem';
