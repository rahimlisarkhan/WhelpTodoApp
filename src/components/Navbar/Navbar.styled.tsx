import styled, { css } from "styled-components";
import ListItem from '@mui/material/ListItem';




export const ListItemStyled: any = styled(ListItem)`

    ${({active,theme}:any) =>{ 
        return css`
        background-color: ${active ? theme.colors.mainOrange :"normal"} !important;
        color: ${active ? theme.colors.white :"normal"} !important;
        
        svg{
            fill: ${active ? theme.colors.white :"normal"} !important;
        }
    `}}
`