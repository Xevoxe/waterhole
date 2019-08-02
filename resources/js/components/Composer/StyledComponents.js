import React from 'react';
import styled from 'styled-components'
import DropDownSelect from '../DropDownSelect';


export const StyledDropDownSelect = styled(DropDownSelect)`
    button{
        width: 100%;
        text-align: left;
        color: ${props => props.theme.primary};
        background-color: transparent;
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
        }

        &:after {
            color: ${props => props.theme.secondary};
            display: inline-flex;
            margin-left: .255em;
            content: "";
            border-top: 0.5em solid;
            border-right: 0.5em solid transparent;
            border-bottom: 0;
            border-left: .5em solid transparent;
            align-self: center;
          }
    }
    ul{
        border: 1px solid ${props => props.theme.primary};
        margin-top: 1px;
        list-style: none;
        padding: 0;
        width: 100%;
        margin: 1px auto 0 auto;
        li {
            display: block;
            width: 100%;
            padding: .25rem 1.5rem;
            font-weight: 400;
            color: ${props => props.theme.primary};
            text-align: inherit;
            white-space: nowrap;
            &:hover {
                color: ${props => props.theme.primary};
                background-color: ${props => props.theme.highlight};
            }
        }
    }
    `;


