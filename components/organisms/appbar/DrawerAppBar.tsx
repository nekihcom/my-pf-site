"use client";

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { grey } from '@mui/material/colors';

import { HeaderTitle } from '@/components/atoms/title/HeaderTitle';
import { GlobalContainer } from '@/components/molecules/layout/GlobalContainer';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
  　* You won't need it on your project.
  */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

const DrawerAppBar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // レスポンシブドロワーメニュー
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav" sx={{ maxWidth:'lg', width:'95vw', top:'10px', left:'50%', transform:'translateX(-50%)', borderRadius:'20px', backgroundColor:'#fff' }}>
        <Toolbar>
          <GlobalContainer>
            <Box sx={{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>

              {/* ヘッダータイトル */}
              <Box>
                <HeaderTitle text={"Mochiken.tech"} />
              </Box>

              {/* sm未満で表示するヘッダーメニュー */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  mr: 2,
                  color:grey[900]
                  // display: { sm: 'none' } 
              }}>
                <MenuIcon />
              </IconButton>

              {/* sm以上で表示するヘッダーメニュー */}
              {/* <Box 
                sx={{ 
                    display: { xs: 'none', sm: 'flex' } ,
                    alignItems: "center"
              }}>
                {navItems.map((item) => (
                  <Button key={item} 
                    sx={{
                      color: '#fff',
                      marginRight: "2rem"
                  }}>
                    {item}
                  </Button>
                ))}
              </Box> */}
            </Box>
          </GlobalContainer>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
              keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}>
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

export default DrawerAppBar;