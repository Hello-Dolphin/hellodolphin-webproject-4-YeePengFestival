import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../images/pic_Lantern/Logo2.png'



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
                <nav class="navbar navbar-default  fixed-top" style={{ height: '132px', backgroundColor: 'rgba(23, 15, 49, 1)', fontSize: '40px', color: 'white' }}>
                    <div class="container-fluid">
                        <div class="px-auto row align-items-center w-100" style={{flexWrap:'noWrap'}}>

                            <div class="col-3 text-center">
                                <a class=" navbar-brand" href="#home">
                                    <img src={Logo} alt="logo"/>
                                </a>
                            </div>

                            <div class="col-3 text-center">
                                <a class="nav-link text-white" href="#home">Home</a>
                            </div>

                            <div class="col-3 text-center">    
                                <a class="nav-link text-white" href="#history">History</a>
                            </div>

                            <div class="col-3 text-center">
                                <a class="nav-link text-white" href="#culture">Culture</a>
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