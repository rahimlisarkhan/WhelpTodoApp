import { Box } from "@material-ui/core";
import { Button } from "@mui/material";
import styled from "styled-components";




export const TodoItemStyled:any = styled(Box)`
    width: 100%;
    height: 70px;
    display: flex ;
    align-items: center;
    justify-content: space-between;
    padding:5px 0px ;
    text-decoration: ${({check}:any) => check ? "line-through" : "normal"};
    border-top:1px solid ${({ theme }) => theme.colors.grayText} ;
    text-transform: capitalize !important;

`

export const CheckButton:any = styled(Button).attrs(({ check }:any) => ({
    variant: check ? "contained" : "outlined",
    color: "warning"
}))`
width: 50px;
height: 60px;
border-radius: 100% !important;
margin-right: 10px !important;
svg{
    font-size: 40px;
}
`