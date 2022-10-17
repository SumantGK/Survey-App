import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import useStyles from './styles/mainlayoutStyle';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function MiniDrawer({ children }) {
  const theme = useTheme();
  const router = useRouter();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // const classes = useStyles();
  const menuItem = [
    {
      label: 'Dashboard',
      name: '/Dashboard',
      icon: <DashboardOutlinedIcon />,
      activeIcon: <DashboardIcon />,
    },
    {
      label: 'QnAs',
      name: '/qnas',
      icon: <ContactSupportOutlinedIcon />,
      activeIcon: <ContactSupportIcon />,
    },
  ];

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerOpen}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        <List>
          <ListItem
            key="add"
            disablePadding
            sx={{
              display: 'block',
              marginTop: '30px',
              marginBottom: '30px',
              padding: '10px',
            }}
          >
            <Box style={{ padding: `${open ? '20px' : '10px'}` }}>
              <Box
                className={`${open && classes.addNewQuestion}`}
                onClick={() => router.replace('/newSurvey')}
                style={{ cursor: 'pointer' }}
              >
                <Box
                  style={{
                    padding: '10px',
                    ...(!open && {
                      display: 'none',
                    }),
                  }}
                >
                  Add New QnA
                </Box>
                <Tooltip
                  title="Add Survey"
                  TransitionComponent={Zoom}
                  arrow
                  placement="right-start"
                >
                  <Box
                    className={classes.addIcon}
                    onClick={() => router.replace('/newSurvey')}
                  >
                    <AddIcon />
                  </Box>
                </Tooltip>
              </Box>
            </Box>
          </ListItem>
          {menuItem.map((menu) => (
            <ListItem
              key={menu.label}
              disablePadding
              sx={{
                display: 'block',
              }}
              className={`${
                router.pathname === menu.name ? classes.active : ''
              }`}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => router.replace(menu.name)}
              >
                <Tooltip
                  title={menu.label}
                  TransitionComponent={Zoom}
                  arrow
                  placement="right-start"
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                    className={`${
                      router.pathname === menu.name ? classes.active : ''
                    }`}
                  >
                    {router.pathname === menu.name
                      ? menu.activeIcon
                      : menu.icon}
                  </ListItemIcon>
                </Tooltip>
                <ListItemText
                  primary={menu.label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Profile', 'Logout'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <Tooltip
                  title={text}
                  TransitionComponent={Zoom}
                  arrow
                  placement="right-start"
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index === 0 ? (
                      <PermIdentityOutlinedIcon />
                    ) : (
                      <PowerSettingsNewOutlinedIcon />
                    )}
                  </ListItemIcon>
                </Tooltip>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" className={classes.content}>
        {children}
      </Box>
    </Box>
  );
}
