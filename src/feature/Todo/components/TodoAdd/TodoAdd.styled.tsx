import { Box } from "@material-ui/core";
import { Button, Input} from "@mui/material";
import styled from "styled-components";


export const TodoAddContent = styled(Box)`
display: flex;
align-items: center;
padding:5px 0;
`


export const TodoAddButton = styled(Button).attrs(()=>({
    variant:"text",
    size:"large"
}))`

width: 50px;
height: 60px;
color:${({theme})=>theme.colors.grayText1} !important;
border-radius: 50% !important;

svg{
    font-size: 40px !important;
}
`

export const TodoField = styled(Input).attrs(()=>({
    fullWidth:true,
    color:"primary",
    size:"normal",
    autoFocus:false
}))`

margin-left:15px !important;
`