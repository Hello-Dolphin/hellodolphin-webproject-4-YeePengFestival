import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    background-color: rgba(28, 18, 57, 1);
    width: 100%;
    min-height: 100vh; 
    padding-bottom: 300px;
    padding-top: 50px;

`


export default class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>

                </Container>
            </React.Fragment>
        )
    }
}

