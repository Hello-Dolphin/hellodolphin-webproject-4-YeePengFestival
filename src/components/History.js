import React, { Component } from 'react'
import styled from 'styled-components';
import Lan1 from '../images/pic_Lantern/Lan1.png'
import Lan2 from '../images/pic_Lantern/Lan2.png'
// import Cloud2 from '../images/cloud/cloud2.png'

const Container = styled.div`
    background-color: rgba(28, 18, 57, 1);
    width: 100%;
    min-height: 100vh; 
    padding-bottom: 300px;
    padding-top: 50px;
    
`
const Lan01 = styled.img`
    position: absolute;
width: 168.36px;
height: 258.69px;
left: 91px;
top: 640px;
transform: matrix(-1, 0.08, 0.08, 1, 0, 0);
`

// const Cloud02 = styled.img`
// position: absolute;
// width: 156.19px;
// height: 97.98px;
// left: 114px;
// top: 766.02px;

// `

const Lan02 = styled.img`
position: absolute;
width: 156.19px;
height: 220.53px;
left: 1212px;
top: 738px;
transform: rotate(10.88deg);
`

export default class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>

                    <Lan01 src={Lan1}></Lan01>
                    <Lan02 src={Lan2}></Lan02>
                    {/* <Cloud02 src={Cloud2}></Cloud02> */}

                </Container>
            </React.Fragment>
        )
    }
}