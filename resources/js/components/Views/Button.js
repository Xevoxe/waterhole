import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 100%;
    text-align: left;
    color: ${props => props.theme.primary};
    background: ${props => (props.solid ? props.theme.highlight : "transparent")};
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    border-color: ${props => props.theme.primary};
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    border-radius: .25rem;
    :hover {
        background-color: ${props => props.theme.highlight};
        text-decoration: none;
        border-color: ${props => props.theme.secondary};
        $:after{
            color: ${props => props.theme.light};
        }
`;

const Button = (props) => {
    const {classNames} = props;
    return (
    
            <StyledButton 
                onClick={()=>{
                props.onClick();
            }} type="button" 
            className={props.className}>
            {props.children}
            </StyledButton>

    )
}
export default Button