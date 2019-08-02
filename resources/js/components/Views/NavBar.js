import React from 'react';
import Button from './Button';
import withRedux from '../hoc/withRedux';
import {composerNew} from '../../redux/composerActions';


import {IconContext} from 'react-icons';
import {FiPlus as PlusIcon} from 'react-icons/fi';

const NavBar = ({categories})=> {
    const styles = {
        width:"130px"
    }
    const ReduxButton = withRedux(composerNew)(Button);

    return(
        <nav className="navbar navbar-light bg-light w-100 justify-content-between">
                {/* <DropDownMenu title="All Categories">
                    {categories.map((category,index)=>{
                        return(
                            <span key={index}data-label={category.label}>{category.label}</span>
                        )
                    })}
                </DropDownMenu> */}
                <ReduxButton className="container" classNames="btn btn-secondary text-center">
                    <div style={styles} className="row align-items-center">
                        <span className="col-4 pr-0">
                            <IconContext.Provider value={{size: "2em", color:"white"}}>
                            <PlusIcon/>
                            </IconContext.Provider>
                        </span>
                        <span className="col-8 pl-0">
                            New Topic
                        </span>
                    </div>
                </ReduxButton>
        </nav>
    )
}

export default NavBar;
