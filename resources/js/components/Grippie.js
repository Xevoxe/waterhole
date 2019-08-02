import React, {Component,Fragment} from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';


const Styled = styled.div`
    display:flex;
    flex-direction: column;
`;

const StyledGrippie = styled.div`
    cursor: row-resize;
    padding: 4px 0;
    background: ${props=> props.theme.secondary};
`;


class Grippie extends Component{ 
    constructor(props){
        super(props);
        
        this.captureMouseEvents = this.captureMouseEvents.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.mouseupListener = this.mouseupListener.bind(this);
        this.mousemoveListener = this.mousemoveListener.bind(this); 
        this.resize = this.resize.bind(this);
        
        this.minHeight = props.minHeight;
        this.state ={
            minHeight: props.minHeight || 375,
            height: props.minHeight || 375
        }
        

    }

    resize(height){
        this.setState({
            height: height
        });
    }
    
    captureMouseEvents(){
        document.addEventListener('mouseup',this.mouseupListener,true);
        document.addEventListener('mousemove', this.mousemoveListener,true);
    }

    handleMouseDown(e){
        this.captureMouseEvents();
        e.preventDefault();
        e.stopPropagation();
    }

    mousemoveListener(e){
        let offset = document.getElementById('navbar').clientHeight;
        let view = window.screen.height - window.innerHeight + offset;//Size of navbar place holder
        if(e.screenY >= view){
            if(e.screenY > window.screen.height - this.state.minHeight){
                this.resize(this.state.minHeight);
            }else this.resize(window.screen.height - e.screenY);
        }else this.resize(window.screen.height - view);

        e.preventDefault();
    }
    mouseupListener(e){
        document.removeEventListener('mouseup',this.mouseupListener,true);
        document.removeEventListener('mousemove', this.mousemoveListener,true);
        e.preventDefault();
    }

    render(){
        return(
            <Styled style={{height:`${this.state.height}px`}}>
                <StyledGrippie onMouseDown={this.handleMouseDown} className="Grippie">
                </StyledGrippie>
                {this.props.children}
            </Styled>
        )
    
    }
}


export default Grippie;
