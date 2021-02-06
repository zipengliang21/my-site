import {Link} from "react-router-dom";
import styled from "styled-components";
import {ThemeEnum} from "../utils/context";

const Button = styled(Link)`
    font-size: 1.2rem;
    font-weight: 200;;
    //margin-top: 100px;
    text-align: center;
    white-space: nowrap;
    height: 40px;
    line-height: 37px;
    padding: 0 20px;
    background-color: ${props => props.theme === ThemeEnum.light? "#03256C" : "#80B1EC"};
    color: ${props => props.theme === ThemeEnum.light? "#EAEAEA" : "#3C597B"};
    border: 2px solid #03256C;
    border-radius: 5px;
    -webkit-appearance: none;
    display: inline-block;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        text-decoration: none;
        background-color: rgba(0, 0, 0, 0);
        color: ${props => props.theme === ThemeEnum.light? "#03256C" : "#80B1EC"};
        border: 2px solid ${props => props.theme === ThemeEnum.light? "#03256C" : "#80B1EC"};
    }
`;

export {Button};