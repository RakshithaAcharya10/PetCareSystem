import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box, Drawer, CssBaseline, AppBar as MuiAppBar, Toolbar,
  List, Typography, Divider, IconButton,
  ListItem, ListItemButton, ListItemIcon, ListItemText
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { Link } from 'react-router-dom';

const drawerWidth = 240;

/* MAIN */
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: open ? 0 : `-${drawerWidth}px`,
    transition: "0.3s",
  })
);

/* APPBAR */
const AppBar = styled(MuiAppBar)(
  () => ({
    background: "#1e3a5f", // 🔥 same as your website header
    boxShadow: "none"
  })
);

/* HEADER */
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: theme.spacing(1),
  ...theme.mixins.toolbar,
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const menuItems = [
    { label: 'User', link: '/Admin/ViewUser' },
    { label: 'Categories', link: '/Admin/ManageCategory' },
    { label: 'Add Category', link: '/Admin/AddCategory' },
    { label: 'Bookings', link: '/Admin/ViewBooking' },
    { label: 'Services', link: '/Admin/ManageService' },
    { label: 'Add Services', link: '/Admin/AddService' }
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* 🔥 TOP BAR */}
      <AppBar position="fixed">
        <Toolbar>
          {!open && (
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>

      {/* 🔥 SIDEBAR */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: "#1e3a5f", // 🔥 DARK BLUE
            color: "#fff",
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)} sx={{ color: "#fff" }}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider sx={{ backgroundColor: "#334155" }} />

        {/* DASHBOARD */}
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/Admin/AHome"
              sx={{
                mx: 1,
                borderRadius: "8px",
                backgroundColor: "#1e40af",
                "&:hover": { backgroundColor: "#1d4ed8" }
              }}
            >
              <ListItemIcon sx={{ color: "#fff" }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider sx={{ backgroundColor: "#334155" }} />

        {/* MENU */}
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                to={item.link}
                sx={{
                  mx: 1,
                  my: 0.5,
                  borderRadius: "8px",
                  color: "#cbd5e1",

                  "&:hover": {
                    backgroundColor: "#1e40af",
                    color: "#fff",
                    transform: "translateX(5px)"
                  }
                }}
              >
                <ListItemIcon sx={{ color: "#cbd5e1" }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>

                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "14px",
                    fontWeight: "500"
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* MAIN */}
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}