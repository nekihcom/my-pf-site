import React, { FC, memo } from 'react';
import { Box } from '@mui/material';

import Heading3 from '@/components/atoms/head/Heading3';
import Text from '@/components/atoms/text/Text';

const Skills:FC = memo(() => {
  return (
    <>
      <Box sx={{mb:3, textAlign:'center'}}>
        <Text>
          業務経験のある技術についてご紹介します。
        </Text>
      </Box>

    <Box sx={{margin:"0 auto", width: {xs:"100%", md:"50%"}}}>
      <Box sx={{mb:2}}>
        <Heading3>フロントエンド</Heading3>
        <Text>HTML, CSS, Javascript, jQuery, React, Next.js, TypeScript</Text>
      </Box>

      <Box sx={{mb:2}}>
        <Heading3>バックエンド</Heading3>
        <Text>PHP, Symfony, Python, Java</Text>
      </Box>

      <Box sx={{mb:2}}>
        <Heading3>CMS</Heading3>
        <Text>Drupal, Wordpress</Text>
      </Box>

      <Box sx={{mb:2}}>
        <Heading3>BI</Heading3>
        <Text>Power BI</Text>
      </Box>

      <Box sx={{mb:2}}>
        <Heading3>Middle Ware</Heading3>
        <Text>SQL, PostgreSQL, MySQL, Apache</Text>
      </Box>

      <Box sx={{mb:2}}>
        <Heading3>Infrastructure</Heading3>
        <Text>CloudFlare, AWS(VPC, Route53, EC2, RDS, S3, Redshift), Vercel</Text>
      </Box>

      <Box sx={{mb:2}}>
        <Heading3>Version Management</Heading3>
        <Text>Git, GitHub, SVN</Text>
      </Box>
    </Box>
    </>
  )
});

export default Skills;
Skills.displayName = 'Skills';