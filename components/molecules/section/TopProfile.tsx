import { FC, memo } from 'react';
import { Box, Typography } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { grey, lightGreen } from '@mui/material/colors';

import QiitaIcon from '../icon/QiitaIcon';
import SnsLink from '../link/SnsLink';
import { ProfileItem } from '../profile/ProfileItem';


const TopProfile:FC = memo(() => {
  return (
    <>
      <Box component={"section"} id="mv" sx={{
        display:{xs:'block', sm:'flex'}, alignItems:{sm:'center'} }}>
        <Box sx={{display:"flex", justifyContent:"center", mb:2}}>
          <Box 
            component={"img"}
            alt="Mochiken's Profile Image" 
            src="/icon/profile-icon.png" 
            maxWidth={"200px"}
            sx={{width:{xs:'70%', sm:'100%'}}}
          />
        </Box>
        <Box sx={{mb:5, px:5, width:{sm:'40%'}}}>
          <Box sx={{textAlign:{xs:'center', sm:'start'}, mb:2}}>
            <Typography variant={"h2"} sx={{fontSize:'28px', fontWeight:700, display:'inline'}}>Mochiken</Typography>
            <Typography variant={"h3"} sx={{fontSize:'20px', fontWeight:500, display:'inline'}}>(@nekihcom)</Typography>
          </Box>
          <ProfileItem title={"職業"} text={"ソフトウェアエンジニア"} />
          <ProfileItem title={"生年月日"} text={"1997.2.11."} />
          <ProfileItem title={"得意分野"} text={"CMSを使ったサイト構築\nBIツール構築"} />
          <ProfileItem title={"最近興味のあるコト"} text={"Next.jsと英語"} />
          <ProfileItem title={"趣味"} text={"野球、バドミントン、筋トレ"} />
        </Box>
        <Box sx={{width:{sm:'40%'}}}>
          <SnsLink link={'https://x.com/nekihcom'} name={'X(Twitter)'} username={'@nekihcom'} icon={<XIcon style={{ fontSize:36 }} />} />
          <SnsLink link={'https://github.com/nekihcom'} name={'GitHub'} username={'@nekihcom'} icon={<GitHubIcon style={{ fontSize:36 }} />} theme={grey[600]} />
          <SnsLink link={'https://qiita.com/nekihcom'} name={'Qiita'} username={'@nekihcom'} icon={<QiitaIcon />} theme={lightGreen[600]} />          
        </Box>
      </Box>
    </>
  )
});

export default TopProfile;
TopProfile.displayName = 'TopProfile';