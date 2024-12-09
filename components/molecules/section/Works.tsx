import { FC, memo } from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import { WorkItem } from '../profile/WorkItem';

const Works:FC = memo(() => {
  return (
    <>
      <Box component={"section"} id="works" sx={{ mb:5 }}>
        <Box sx={{ mb:2 }}>
          <Typography variant={"h2"} sx={{ textAlign:"center", fontSize:'28px', fontWeight:700}}>Works</Typography>
        </Box>
        <Box sx={{ width:'100%', margin:'0 auto' }}>
          <Grid2 container spacing={{ xs:1, sm:5 }} columns={{ xs:1, md:2, lg:3 }} sx={{ justifyContent:'space-evenly' }}>
          <WorkItem title={'まつかわ自然農園'} description={'Webデザイン、HTML/CSSの練習で作成したLP'} image={'/work/matsukawa-farm.png'} url={'https://shiny-syrniki-a6e70f.netlify.app/'} detailDescription={'ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。'} />
          <WorkItem title={'StayHub'} description={'Javascriptの練習で作成したLP'} image={'/work/stayhub.png'} url={'https://superlative-seahorse-3e91fd.netlify.app/'} detailDescription={'ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。'} />
          <WorkItem title={'Todoアプリ'} description={'Reactの練習で作成したTODOアプリ'} image={'/work/react-todo.png'} url={'https://nf-clone-sigma-amber.vercel.app/'} detailDescription={'ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。'} />
          <WorkItem title={'Netflix Clone'} description={'Netflixのクローンアプリ、予告動画も見れます'} image={'/work/netflix-clone.png'} url={'https://todo-kappa-gilt.vercel.app/'} detailDescription={'ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。'} />
          <Box sx={{width:350}}></Box>
          <Box sx={{width:350}}></Box>
          </Grid2>
        </Box>
      </Box>
    </>
  )
});

export default Works;
Works.displayName = 'Works';