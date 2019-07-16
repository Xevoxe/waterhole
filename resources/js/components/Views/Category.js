import React from 'react';
import {Link} from 'react-router-dom';
const Category = ({label,description,numTopics}) =>{
    return (
        <Link to="/topics" className='list-group-item list-group-item-action container'>
            <div className="row">
                <div className="col-8">
                    <h5 className="mb-1">{label}</h5>
                    <p className="mb-1">{description}</p>
                </div>
                <div className="col-4">
                    <div>
                        <small className="d-block">Topics: {numTopics}</small>
                        <small className="d-block">New: 26000 </small>
                    </div>
                </div>
            </div>
        </Link>
    );
}
export default Category;