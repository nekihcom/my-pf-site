import { FC, memo } from "react";
import { Box } from "@mui/material";

import { GlobalContainer } from "@/components/molecules/layout/GlobalContainer";
import TopProfile from "@/components/molecules/section/TopProfile";

const Home:FC = memo(() => {
  
  return (
    <>
      <Box component={"main"} sx={{ pt:20, pb:8, px:{sm:8, md:0} }}>
        <GlobalContainer>
          <TopProfile />
        </GlobalContainer>
      </Box>
    </>
  );
});

Home.displayName = "Home";
export default Home;