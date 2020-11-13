import React, { Component } from 'react'
import styled from 'styled-components';
import Moon from '../images/pic_Lantern/Moonwithfont.png'
import Lantern1 from '../images/pic_Lantern/lanfly1.png'
import Lantern2 from '../images/pic_Lantern/lanfly2.png'
import Lantern3 from '../images/pic_Lantern/lanfly3.png'
import Mascot from '../images/pic_Lantern/mascot.png'
import Lantern4 from '../images/pic_Lantern/ก้อนโคม.png'


const MoonFont = styled.img`
    position: absolute;
    width: 567px;
    height: 567px;
    left: 424px;
    top: 221px;
`
const Mascot1 = styled.img`
    position: absolute;
    width: 283px;
    height: 361px;
    left: 868px;
    top: 471px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
`
const Lan1 = styled.img`
    position: absolute;
    width: 184.73px;
    height: 276.94px;
    left: 233.25px;
    top: 705px;
    transform: rotate(10.24deg);
`
const Lan2 = styled.img`
    position: absolute;
    width: 133.62px;
    height: 210.22px;
    left: 1210px;
    top: 777.4px;
    transform: rotate(-8.78deg);
`
const Lan3 = styled.img`
    position: absolute;
    width: 263px;
    height: 308px;
    left: 49px;
    top: 375.47px;
    transform: rotate(-9.07deg);
`
const Lan4 = styled.img`
    position: absolute;
    width: 269px;
    height: 179px;
    left: 1127.62px;
    top: 200.47px;
    transform: rotate(-9.07deg);
`
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

                  <MoonFont src={Moon}></MoonFont>
                  <Lan1 src={Lantern1}></Lan1>
                  <Lan2 src={Lantern2}></Lan2>
                  <Lan3 src={Lantern3}></Lan3>
                  <Lan4 src={Lantern4}></Lan4>
                  <Mascot1 src={Mascot}></Mascot1>
    

                </Container>
            </React.Fragment>
        )
    }
}

