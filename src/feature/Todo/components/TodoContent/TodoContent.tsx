import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightModeIcon from '@mui/icons-material/LightMode';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Grow from '@mui/material/Grow';
import { AppBar, Drawer, DrawerHeader } from './TodoContent.styled';
import { useHistory } from 'react-router-dom';
import UserAvatar from '../../../../components/UserAvatar';
import TodoList from '../TodoList';


export const TodoContent = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const { push } = useHistory()

    const appExit = () => {
        push("/")
        localStorage.removeItem("user")
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Grow
                in={true}
                style={{ transformOrigin: '0 0 5' }}
                timeout={1000}
            >
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Whelp Todo App
                        </Typography>
                    </Toolbar>
                        {/* <UserAvatar/> */}
                </AppBar>
            </Grow>

            <Grow
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                timeout={1000}
            >
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        <ListItem button >
                            <ListItemIcon>
                                <LightModeIcon />
                            </ListItemIcon>
                            <ListItemText primary={"My Day"} />
                        </ListItem>
                        <ListItem button >
                            <ListItemIcon>
                                <StarOutlineIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Important"} />
                        </ListItem>
                        <ListItem button onClick={appExit} >
                            <ListItemIcon>
                                <ExitToAppIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Exit"} />
                        </ListItem>
                    </List>
                </Drawer>
            </Grow>

            <Grow
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                timeout={1000}
            >
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <Typography variant="h4">
                            My Day
                    </Typography>
                    <TodoList/>
                </Box>

            </Grow>

        </Box>
    );
}
