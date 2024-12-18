"use client";

import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MenuDrawer: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <>
      {/* Menu Button */}
      <IconButton
        onClick={() => toggleDrawer(true)}
        sx={{ position: "fixed", top: 16, right: 16, zIndex: 1 }}
      >
        <MenuIcon sx={{fontSize: 35}} />
      </IconButton>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box
          sx={{
            width: 300,
            height: "100%",
            bgcolor: "#2b2b2b",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              bgcolor: "#121212",
              color: "#fff",
              p: 3,
              textAlign: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: "serif", letterSpacing:2 }}>
              Menu
            </Typography>
          </Box>

          <Divider />

          {/* Menu Items */}
          <List sx={{ flexGrow: 1, px: 2 }}>
            <ListItemButton
              href="/"
              sx={{
                borderRadius: 2,
                mb: 1,
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <ListItemText
                primary="Home"
                primaryTypographyProps={{
                  fontSize: 18,
                  color: "#ffffff",
                  fontFamily: "serif",
                  letterSpacing:1
                }}
              />
            </ListItemButton>
            <ListItemButton
              href="/about"
              sx={{
                borderRadius: 2,
                mb: 1,
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <ListItemText
                primary="About"
                primaryTypographyProps={{
                  fontSize: 18,
                  color: "#ffffff",
                  fontFamily: "serif",
                  letterSpacing:1
                }}
              />
            </ListItemButton>
            <ListItemButton
              href="/portfolio"
              sx={{
                borderRadius: 2,
                mb: 1,
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <ListItemText
                primary="Portfolio"
                primaryTypographyProps={{
                  fontSize: 18,
                  color: "#ffffff",
                  fontFamily: "serif",
                  letterSpacing:1
                }}
              />
            </ListItemButton>
            <ListItemButton
              href="/contact"
              sx={{
                borderRadius: 2,
                mb: 1,
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <ListItemText
                primary="Contact"
                primaryTypographyProps={{
                  fontSize: 18,
                  color: "#ffffff",
                  fontFamily: "serif",
                  letterSpacing:1
                }}
              />
            </ListItemButton>
          </List>

          <Divider />

          {/* Footer */}
          <Box
            sx={{
              p: 3,
              textAlign: "center",
              fontSize: 14,
              color: "#888",
            }}
          >
            © {new Date().getFullYear()} Marytez Salas
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
