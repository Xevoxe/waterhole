import React, {Component} from 'react';

import Categories from './Categories';


export default class Home extends Component{

 render(){
    return(
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
    );
}
}