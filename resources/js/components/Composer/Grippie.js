import React, {Component} from 'react';

import PropTypes from 'prop-types';

class Grippie extends Component{ 
    constructor(props){
        super(props);
        
        this.captureMouseEvents = this.captureMouseEvents.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.mouseupListener = this.mouseupListener.bind(this);
        this.mousemoveListener = this.mousemoveListener.bind(this); 
        
        this.minHeight = props.minHeight;
        this.position = props.height;
        this.Resize = props.onChangeHeight;
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
            if(e.screenY > window.screen.height - this.minHeight){
                this.Resize(this.minHeight);
            }else this.Resize(window.screen.height - e.screenY);
        }else this.Resize(window.screen.height - view);

        e.preventDefault();
    }
    mouseupListener(e){
        document.removeEventListener('mouseup',this.mouseupListener,true);
        document.removeEventListener('mousemove', this.mousemoveListener,true);
        e.preventDefault();
    }

    render(){
        return(
            <div style={styles} onMouseDown={this.handleMouseDown} className="Grippie">
            </div>
        )
    
    }
}

const styles = {
    cursor: "row-resize",
    padding: "4px 0",
    background: "#08c"
}

export default Grippie;

Grippie.defaultProps={
    styles: styles
}