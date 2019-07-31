import React, {Fragment,Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import NavBar from '../Views/NavBar';
import Home from '../Views/Home';
import  {fetchCategories} from '../../redux/categoryActions';
import {connect} from 'react-redux';
import Portal from '../Portal';
import Composer from '../Composer/Composer';
import Topics from './Topics';

class Waterhole extends Component {

    componentDidMount(){
        this.props.dispatch(fetchCategories());
    }


    render(){ 
    return(
        <Fragment>   
            {!this.props.loaded ? console.log("Notloaded") :
            <Fragment>
                <div className="container">
                    <div className="row">
                        <NavBar categories={this.props.categories}/>
                    </div>
                    <div id="content-root" className="row">
                        <BrowserRouter>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/topics" component={Topics}/>
                            </Switch>
                        </BrowserRouter>
                    </div>
                </div>
            </Fragment>
            } 
                <div id="composer-root" className="fixed-bottom">
                    <Portal root="composer-root">
                        { this.props.isComposerActive ? <Composer  /> : null }  
                    </Portal>
                </div>
        </Fragment>
    );
    }
}

const mapStateToProps = state =>{
    return {
    loaded: state.category.isLoaded,
    categories : state.category.items,
    isComposerActive : state.composer.isActive
    };
}

export default connect(mapStateToProps)(Waterhole);