'use client'

import React, { useState } from "react";
import { Drawer, IconButton, Box, List, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MenuDrawer: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <IconButton
        onClick={() => toggleDrawer(true)}
        sx={{ position: "fixed", top: 16, right: 16 }}
      >
        <MenuIcon sx={{fontSize: 35}} />
      </IconButton>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box sx={{ width: 250 }}>
          <List>
            <ListItemButton href="/">
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton href="/about">
              <ListItemText primary="About" />
            </ListItemButton>
            <ListItemButton href="/portfolio">
              <ListItemText primary="Portfolio" />
            </ListItemButton>
            <ListItemButton href="/contact">
              <ListItemText primary="Contact" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
