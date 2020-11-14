import React, { Component } from 'react'
import styled from 'styled-components';
import Moon from '../images/pic_Lantern/Moon.png'
import Lanfly1 from '../images/pic_Lantern/lanfly1.png'
import Lanfly2 from '../images/pic_Lantern/lanfly2.png'
import Lanfly3 from '../images/pic_Lantern/lanfly3.png'
import Mascot1 from '../images/pic_Lantern/mascot.png'
import Lanfly4 from '../images/pic_Lantern/ก้อนโคม.png'


const MoonFont = styled.img`
    position: absolute;
    width: 567px;
    height: 567px;
    left: 424px;
    top: 221px;
`
const Mascot01 = styled.img`
    position: absolute;
    width: 283px;
    height: 361px;
    left: 868px;
    top: 471px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
`
const Lanfly01 = styled.img`
    position: absolute;
    width: 184.73px;
    height: 276.94px;
    left: 233.25px;
    top: 705px;
    transform: rotate(10.24deg);
`
const Lanfly02 = styled.img`
    position: absolute;
    width: 133.62px;
    height: 210.22px;
    left: 1210px;
    top: 777.4px;
    transform: rotate(-8.78deg);
`
const Lanfly03 = styled.img`
    position: absolute;
    width: 263px;
    height: 308px;
    left: 49px;
    top: 375.47px;
    transform: rotate(-9.07deg);
`
const Lanfly04 = styled.img`
    position: absolute;
    width: 269px;
    height: 179px;
    left: 1137.24px;
    top: 211.08px;
    transform: rotate(-9.07deg);
`
const Container = styled.div`
    background-color: rgba(28, 18, 57, 1);
    width: 100%;
    height:auto;
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
                  {/* <Lanfly01 src={Lanfly1}></Lanfly01>
                  <Lanfly02 src={Lanfly2}></Lanfly02>
                  <Lanfly03 src={Lanfly3}></Lanfly03>
                  <Lanfly04 src={Lanfly4}></Lanfly04>
                  <Mascot01 src={Mascot1}></Mascot01> */}
    

                </Container>
            </React.Fragment>
        )
    }
}

