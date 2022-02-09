import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightModeIcon from '@mui/icons-material/LightMode';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useHistory } from 'react-router-dom';
import { ListItemStyled } from './Navbar.styled';
import { router } from '../../util/router';


export const Navbar = ({ handleClick }: any) => {
    let { push, location } = useHistory();

    const pushHref = (href: string): void => {
        push(href)
        handleClick()
    }

    return (
        <List>
            <ListItemStyled button active={location.pathname === "/todo/my-day" ? "true" : ""} onClick={() => pushHref(router.todo.children["my-day"].href)}>
                <ListItemIcon>
                    <LightModeIcon />
                </ListItemIcon>
                <ListItemText primary={"My Day"} />
            </ListItemStyled>
            <ListItemStyled button active={location.pathname === "/todo/important" ? "true" : ""} onClick={() => pushHref(router.todo.children.important.href)}>
                <ListItemIcon>
                    <StarOutlineIcon />
                </ListItemIcon>
                <ListItemText primary={"Important"} />
            </ListItemStyled>
            <ListItemStyled button onClick={() => pushHref('/')}>
                <ListItemIcon>
                    <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary={"Exit"} />
            </ListItemStyled>
        </List>
    )
}