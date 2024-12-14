import { FC, memo } from "react";
import { Box } from "@mui/material";

import { GlobalContainer } from "@/components/molecules/layout/GlobalContainer";
import TopProfile from "@/components/molecules/section/TopProfile";
import TopSection from "@/components/molecules/section/TopSection";
import Works from "@/components/molecules/section/Works";
import Skills from "@/components/molecules/section/Skills";
import Career from "@/components/molecules/section/Career";

const Home:FC = memo(() => {
  
  return (
    <>
      <Box component={"main"} sx={{ pt:{xs:12, md:20}, pb:8, px:{sm:8, md:0} }}>
        <GlobalContainer>
          <TopProfile />
          <TopSection id={"works"} name={"Work"}>
            <Works />
          </TopSection>
          <TopSection id={"skills"} name={"Skills"}>
            <Skills />
          </TopSection>
          <TopSection id={"career"} name={"Career"}>
            <Career />
          </TopSection>
        </GlobalContainer>
      </Box>
    </>
  );
});

Home.displayName = "Home";
export default Home;