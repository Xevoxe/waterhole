import React, {Component,Fragment} from 'react';
import ReactDOM from 'react-dom';

export default class Portal extends Component{
    constructor(props){
        super(props);
        this.root = props.root;
        this.el;
    }

    componentDidMount() {
        this.el = document.getElementById(this.root);
    }

    componentWillUnmount() {
        this.el.removeChild(this.el);
    }

    render(){
        this.el = document.getElementById(this.root);
        return (
        <Fragment>
          {this.el ? ReactDOM.createPortal(this.props.children,this.el) : null}
        </Fragment>
        );
    }
}