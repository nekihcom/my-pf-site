import { Box } from "@mui/material";
import { FC, memo } from "react";

import DrawerAppBar from "../appbar/DrawerAppBar";

export const Header:FC = memo(() => {

  return (
    <Box component={"header"}>
      <DrawerAppBar />
    </Box>
    )
});

Header.displayName = 'Header';