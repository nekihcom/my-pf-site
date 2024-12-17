import React, { FC, memo } from 'react';
import { Box } from '@mui/material';

import Text from '@/components/atoms/text/Text';

const Contact:FC = memo(() => {
  return (
    <>
      <Box sx={{textAlign:"center", mb:2}}>
        <Text>当サイトに関するご質問や、お仕事のご依頼等は以下のフォームよりお問い合わせください。</Text>
      </Box>

      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSfvODmdEs3i29skHAv0flvXZt_4pdB7qvfTjsv2JTn5nQ7Obw/viewform?embedded=true" 
        className="w-full m-0 overflow-hidden"
        style={{ height:"930px", minWidth:"320px" }}
      >
        読み込んでいます…
      </iframe>
    </>
  )
});

export default Contact;
Contact.displayName = 'Contact';