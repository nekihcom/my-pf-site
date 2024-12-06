import { GlobalContainer } from "@/components/molecules/GlobalContainer";
import { Box, Typography } from "@mui/material";
import { FC, memo } from "react";

const Home:FC = memo(() => {
  
  return (
    <>
      <Box component={"main"} sx={{ py:12, px:{sm:8, md:0} }}>
        <GlobalContainer>
          <Box component={"section"} id="mv">
            Mochiken (Masaya Kemmochi)<br />
            Software Engineer<br />
            1997.2.11.<br />
            CMSを使ったサイト構築 & BIツール構築<br />
            Next.jsと英語を勉強中<br />
            野球、バドミントン、筋トレ<br />
            <br />
            <Box component="img"
              alt="Mochiken (Masaya Kemmochi)"
              src="https://2.gravatar.com/avatar/d9027e1ce316d94ea1025c142202d6e9345d2fae69334d004b9074cf52f27fb5"
            /><br/>
            <br />
            https://x.com/nekihcom<br />
            https://github.com/nekihcom<br />
            https://qiita.com/<br />
            <br />
          </Box>
        </GlobalContainer>
      </Box>
    </>
  );
});

Home.displayName = "Home";
export default Home;