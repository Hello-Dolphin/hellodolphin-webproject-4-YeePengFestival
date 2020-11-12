import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {};

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>
                <nav class="" style={{ height: '132px', backgroundColor: 'rgba(255, 255, 255, 0.26)' ,fontSize :'40px'}}>
                    <div class="container">
                        <div class="row pt-4">

                            <div class="col-sm text-danger m-1">
                                <a class="navbar-brand" href="#">
                                <img src="../../public/img/pic_Lantern/logo.png" width="30" height="30" alt="logo" >
                                </a>   
                            </div>
                            <div class="col-sm text-danger m-1">
                                <a class="nav-link" href="#">Home</a>
                            </div>
                            <div class="col-sm text-danger m-1">
                                <a class="nav-link" href="#">History</a>    
                            </div>
                            <div class="col-sm text-danger m-1">
                                <a class="nav-link" href="#">Culture</a> 
                            </div>
                            <div class="col-sm text-danger  m-1">
                                <a class="nav-link" href="#">Gallary</a> 
                            </div>
                            
                        </div>
                    </div>
                </nav>
            </React.Fragment >
        )
    }
}

Nav.propTypes = propTypes;

export default Nav;