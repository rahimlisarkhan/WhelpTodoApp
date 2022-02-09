import { Box } from "@material-ui/core";
import { Button } from "@mui/material";
import styled from "styled-components";
import { ThemeProps } from "../../../../interface/theme";
import mediaQueries from "../../../../style/media-queries";

type TodoItemStyledProps = {
    theme?:ThemeProps,
    check?:string,
}

export const TodoItemStyled: React.FunctionComponent<TodoItemStyledProps> = styled(Box)`
    width: 100%;
    height: 110px;
    display: flex ;
    align-items: center;
    justify-content: space-between;
    padding:5px 0px ;
    text-decoration: ${({ check }: TodoItemStyledProps) => check ? "line-through" : "normal"};
    border-top:1px solid ${({ theme }) => theme.colors.grayText} ;
    text-transform: capitalize !important;
    margin-top: 10px;

    ${mediaQueries.greaterThan('xs')`
        padding:15px 0px ;
  `}

`

export const CheckButton: React.FunctionComponent<any> = styled(Button).attrs(({ check }:TodoItemStyledProps) => ({
    variant: check ? "contained" : "outlined",
    color: "warning"
}))`


${mediaQueries.greaterThan('xs')`
    width: 20px;
    height: 30px;
    border-radius: 15px !important;
    margin:0 10px 10px 0 !important;
    svg{
        font-size: 25px !important;
    }
  `}

${mediaQueries.greaterThan('md')`
    width: 50px;
    height: 60px;
    border-radius: 50% !important;

    svg{
        font-size: 40px;
    }
  `}


`