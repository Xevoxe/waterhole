import React, {Component} from 'react';
import {connect} from 'react-redux';

const withRedux = (onClick) => (WrappedComponent) =>{
    return connect(null,{onClick})(WrappedComponent);
}
export default withRedux;
