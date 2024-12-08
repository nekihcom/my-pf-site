import { FC, memo } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { grey, lightGreen } from '@mui/material/colors';

import QiitaIcon from "@/components/molecules/Icon/QiitaIcon";
import SnsLink from '../link/SnsLink';


const TopProfile:FC = memo(() => {
  return (
    <>
      <Box component={"section"} id="mv">
        <Box sx={{display:"flex", justifyContent:"center", mb:2}}>
          <Box 
            component={"img"}
            alt="Mochiken's Profile Image" 
            src="/icon/profile-icon.png" 
            width={"70%"}
          />
        </Box>
        <Typography variant={"h2"} align={'center'} sx={{fontSize:'28px', fontWeight:700, mb:5}}>Mochiken</Typography>
        <TableContainer sx={{mb:5}}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell sx={{fontWeight:700}}>Occupation</TableCell>
                <TableCell>Software Engineer</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{fontWeight:700}}>Birth</TableCell>
                <TableCell>1997.2.11.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{fontWeight:700}}>Strength</TableCell>
                <TableCell>CMSを使ったサイト構築<br />BIツール構築</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{fontWeight:700}}>Interest Skills</TableCell>
                <TableCell>Next.jsと英語を勉強中</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{fontWeight:700}}>Hobby</TableCell>
                <TableCell>野球、バドミントン、筋トレ</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <SnsLink link={'https://x.com/nekihcom'} name={'X(Twitter)'} username={'@nekihcom'} icon={<XIcon style={{ fontSize:36 }} />} />
        <SnsLink link={'https://github.com/nekihcom'} name={'GitHub'} username={'@nekihcom'} icon={<GitHubIcon style={{ fontSize:36 }} />} theme={grey[600]} />
        <SnsLink link={'https://qiita.com/nekihcom'} name={'Qiita'} username={'@nekihcom'} icon={<QiitaIcon />} theme={lightGreen[600]} />
      </Box>
    </>
  )
});

export default TopProfile