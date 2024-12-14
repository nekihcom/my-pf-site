import { FC, memo, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

type Props = {
  id: string;
  name: string;
  children?: ReactNode;
}

const TopSection:FC<Props> = memo((props) => {
  const { id, name, children } = props;
  return (
    <>
      <Box component={"section"} id={ id } sx={{ mb:15 }}>
        <Box sx={{ mb:2 }}>
          <Typography variant={"h2"} sx={{ textAlign:"center", fontSize:'28px', fontWeight:700, fontFamily:'inherit'}}>{ name }</Typography>
        </Box>
        <Box sx={{ width:'100%', margin:'0 auto' }}>
          { children }
        </Box>
      </Box>
    </>
  )
});

export default TopSection;
TopSection.displayName = 'TopSection';