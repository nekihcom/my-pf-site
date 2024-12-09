import { FC, memo } from "react";
import { Box } from "@mui/material";

import { GlobalContainer } from "@/components/molecules/layout/GlobalContainer";
import TopProfile from "@/components/molecules/section/TopProfile";
import Works from "@/components/molecules/section/Works";

const Home:FC = memo(() => {
  
  return (
    <>
      <Box component={"main"} sx={{ pt:{xs:12, md:20}, pb:8, px:{sm:8, md:0} }}>
        <GlobalContainer>
          <TopProfile />
          <Works />
        </GlobalContainer>
      </Box>
    </>
  );
});

Home.displayName = "Home";
export default Home;