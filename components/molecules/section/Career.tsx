import React, { FC, memo } from 'react';
import { Box, Card, Typography, } from '@mui/material';
import { grey } from "@mui/material/colors";


import Text from '@/components/atoms/text/Text';

const Career:FC = memo(() => {
  return (
    <>
      <Box>
        <Card sx={{maxWidth:"500px", margin:"0 auto", py:2, px:4, backgroundColor:grey[100]}}>
          <Text fontsize={12}>1997/02/11</Text>
          <Text>埼玉県で生まれる</Text>
        </Card>
        <Box sx={{margin:"8px auto", width:"2.5px", height:30, borderRadius:20, backgroundColor:grey[300]}}></Box>
        <Card sx={{maxWidth:"500px", margin:"0 auto", py:2, px:4, backgroundColor:grey[200]}}>
          <Text fontsize={12}>2019/3/31</Text>
          <Text>成蹊大学理工学部情報科学科 卒業</Text>
          <Typography sx={{mb:1}}> </Typography>
          <Text fontsize={12}>C++, Javaなどプログラミング言語、アルゴリズム、OS、データベース、人工知能など幅広く学習</Text>
          <Text fontsize={12}>卒業研究ではTwitterのツイートを学習データとした言語生成モデルとそれを活用したチャットボットを構築</Text>
        </Card>
        <Box sx={{margin:"8px auto", width:"2.5px", height:30, borderRadius:20, backgroundColor:grey[300]}}></Box>
        <Card sx={{maxWidth:"500px", margin:"0 auto", py:2, px:4, backgroundColor:grey[100]}}>
          <Text fontsize={12}>2019/4/1 - 現在</Text>
          <Text>日系SIer 入社</Text>
          <Card sx={{mt:2, py:2, px:4, backgroundColor:grey[200]}}>
            <Text fontsize={12}>2019/9/1 - 2023/3/31</Text>
            <Text>CMSを使ったサイト構築</Text>
          </Card>
          <Box sx={{margin:"8px auto", width:"2.5px", height:30, borderRadius:20, backgroundColor:grey[300]}}></Box>
          <Card sx={{py:2, px:4, backgroundColor:grey[200]}}>
            <Text fontsize={12}>2023/4/1 - 現在</Text>
            <Text>営業向けデータ分析基盤とレポートの開発</Text>
          </Card>
        </Card>
      </Box>
    </>
  )
});

export default Career;
Career.displayName = 'Career';