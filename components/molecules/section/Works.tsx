import { FC, memo } from 'react';
import { Box, Grid2 } from '@mui/material';
import { WorkItem } from '../profile/WorkItem';
import Text from '@/components/atoms/text/Text';

const Works:FC = memo(() => {
  return (
    <>
      <Box sx={{mb:3, textAlign:'center'}}>
        <Text>
          これまでに個人で開発した作品についてご紹介します。
        </Text>
      </Box>

      <Grid2 container spacing={{ xs:1, sm:5 }} columns={{ xs:1, md:2, lg:3 }} sx={{ justifyContent:'space-evenly' }}>
        <WorkItem title={'Netflix Clone'} description={'Netflixのクローンアプリ、予告動画も見れます'} image={'/work/netflix-clone.png'} url={'https://todo-kappa-gilt.vercel.app/https://nf-clone-sigma-amber.vercel.app/'} detailDescription={'ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。'} />
        <WorkItem title={'Todoアプリ'} description={'Reactの練習で作成したTODOアプリ'} image={'/work/react-todo.png'} url={'https://todo-kappa-gilt.vercel.app/'} detailDescription={'ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。'} />
        <WorkItem title={'StayHub'} description={'Javascriptの練習で作成したLP'} image={'/work/stayhub.png'} url={'https://superlative-seahorse-3e91fd.netlify.app/'} detailDescription={'ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。ここに詳細な説明が入ります。'} />
      </Grid2>
    </>
  )
});

export default Works;
Works.displayName = 'Works';