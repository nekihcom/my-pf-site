import { GlobalContainer } from "@/components/molecules/layout/GlobalContainer";
import { Box } from "@mui/material";
import { FC, memo } from "react";

export const Footer:FC = memo(() => {

  return (
    <Box component={"footer"} className="py-4">
      <GlobalContainer>
        <Box>
          <p className="text-center text-sm">© 2024 mochiken.tech</p>
        </Box>
      </GlobalContainer>
    </Box>
  )
});

Footer.displayName = 'Footer';