import styled, { css } from "styled-components";
import ListItem from '@mui/material/ListItem';
import React from "react";
import { ThemeProps } from "../../interface/theme";


type ListItemStyledProps = {
    theme?:ThemeProps,
    active?:string,
    onClick: () => void;
    button?:boolean
  }


export const ListItemStyled: React.FunctionComponent<ListItemStyledProps> = styled(ListItem)`

    ${({active,theme}:ListItemStyledProps) =>{ 
        return css`
        background-color: ${active ? theme?.colors.mainOrange :"normal"} !important;
        color: ${active ? theme?.colors.white :"normal"} !important;
        
        svg{
            fill: ${active ? theme?.colors.white :"normal"} !important;
        }
    `}}
`