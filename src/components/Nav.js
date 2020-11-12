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
                            <img src="" class="img-fluid" alt="logo">
                            </div>
                            <div class="col-sm text-danger m-1">
                                Home
                            </div>
                            <div class="col-sm text-danger m-1">
                                History
                            </div>
                            <div class="col-sm text-danger m-1">
                                Culture
                            </div>
                            <div class="col-sm text-danger  m-1">
                                Gallary
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