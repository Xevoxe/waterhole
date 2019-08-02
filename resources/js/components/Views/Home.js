import React, {Component,Fragment} from 'react';
import ReactDOM from 'react-dom';

import Categories from '../containers/Categories';
import {FiPlus as PlusIcon} from "react-icons/fi";
import {IconContext} from "react-icons";

export default class Home extends Component{
    constructor(props){
        super(props);

        this.handleNewTopicClick = this.handleNewTopicClick.bind(this);

    }

handleNewTopicClick(){
    //Render a portal
    var composerRoot = document.getElementById('composer-root');
    ReactDOM.createPortal(<Component />, composerRoot)
}

 render(){
    return(
        <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 container">
                    <div className="col-12 row">
                       <span role="heading" aria-level="2" className="h6  col-8 ">Categories</span>
                       <span role="heading" aria-level="2" className="h6 col-4 text-right">Topics</span>
                    </div>
                    <div id="categories" className="list-group">
                        <Categories />
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <div id="latesttopics">Latest Topics</div>
                </div>
            </div>
        </div> 
     
        </Fragment>
    );
}
}