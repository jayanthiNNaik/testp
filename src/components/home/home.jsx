import React, { Component } from 'react';
import Header from '../header/header';
import HOSTLIST from '../hosts/hostlist';
class HOME extends Component {
    render() { 
    
        return <div><Header /><HOSTLIST/></div>;
    }
}
 
export default HOME;
