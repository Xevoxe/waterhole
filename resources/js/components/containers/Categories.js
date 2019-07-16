import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Category from '../Views/Category';
import axios from 'axios';


export default class Categories extends Component {
    constructor(){
        super();
        this.state = {
            categories: []
        }
    }

    componentDidMount(){
        axios.get('./api/categories').then(response =>{
            this.setState({
                categories: response.data
            })
        })
    }

    render(){
        const {categories} = this.state;
        return(
            <div>
                {categories.map((category,index)=>{
                    return (
                          <Category {...category} key={index} />
                    )
                })}
            </div>
        );
    }
}

