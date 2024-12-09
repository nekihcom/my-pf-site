import { FC, memo, ReactNode } from "react";
import { Box, Typography } from "@mui/material";

type Props = {
  link: string;
  name: string;
  username: string;
  icon: ReactNode;
  theme?: string;
}

const SnsLink:FC<Props> = memo((props) => {
  const { link, name, username, icon, theme='black'} = props;
  return (
    <>
      <Box component={"a"} href={link} target={"_blank"} rel="noopener" sx={{backgroundColor:theme, color:'white', display:'block', py:1.5, px:3, borderRadius:5, mb:2}}>
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Box>
            <Typography sx={{fontSize:"0.75em"}}>{ name }</Typography>
            <Typography>{ username }</Typography>
          </Box>
          <Box>
            {icon}
          </Box>
        </Box>
      </Box>
    </>
  );
});

export default SnsLink;
SnsLink.displayName = 'SnsLink';