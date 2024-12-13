import { Box, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { FC, memo } from "react";

type Props = {
  level: number;
};

const calcColor = (level: number):string => {
  return (level == 1 ? green[300] : (level ==2 ? green[600] : green[900]));
}

const Level:FC<Props> = memo((props) => {
  const { level } = props;
  const bgColor = calcColor(level);

  return (
    <>
      <Box sx={{ backgroundColor:bgColor , display:'inline-block', borderRadius:5, py:0.25, px:2 }}>
        <Typography variant='body2' sx={{ color:'#fff', fontSize:16 }} >Lv.{ level }</Typography>
      </Box>
    </>
  )
});

export default Level;
Level.displayName = 'Level';