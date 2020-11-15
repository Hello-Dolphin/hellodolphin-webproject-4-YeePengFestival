import React, { Component } from 'react'
import styled from 'styled-components';
import Moon from '../images/pic_Lantern/Moon.png'
import Lanfly1 from '../images/pic_Lantern/lanfly1.png'
import Lanfly2 from '../images/pic_Lantern/lanfly2.png'
import Lanfly3 from '../images/pic_Lantern/lanfly3.png'
import Mascot1 from '../images/pic_Lantern/mascot.png'
import Lanfly4 from '../images/pic_Lantern/ก้อนโคม.png'


const MoonFont = styled.img`
    width: 467px;
    height: 467px;
    display:block;  
    margin-top:180px;
    position:relative;
    margin-left:29%;
`
const Mascot01 = styled.img`
    position: absolute;
    width: 244px;
    height: 316px;
    margin-top:26%;
    margin-left:45%;
    transform: matrix(-1, 0, 0, 1, 0, 0);
`
const Lanfly01 = styled.img`
    position: absolute;
    width: 184.73px;
    height: 276.94px;
    transform: rotate(10.24deg);
    margin-top:43%;
    margin-left:8%;
`
const Lanfly02 = styled.img`
    position: absolute;
    width: 133.62px;
    height: 210.22px;
    transform: rotate(-8.78deg);
    margin-top:45%;
    margin-left:75%;
`
const Lanfly03 = styled.img`
    position: absolute;
    width: 263px;
    height: 308px;
    transform: rotate(-9.07deg);
    margin-top:16%;
    margin-left:-7%;
    
`
const Lanfly04 = styled.img`
    position: absolute;
    width: 269px;
    height: 179px;
    transform: rotate(-9.07deg);
    margin-top:10%;
    margin-left:65%;
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
                <Container >
                    <div class="container" id="home">
                        <div class="row">
                            <MoonFont src={Moon} ></MoonFont>
                            <Lanfly01 src={Lanfly1}></Lanfly01>
                            <Lanfly02 src={Lanfly2}></Lanfly02>
                            <Lanfly03 src={Lanfly3}></Lanfly03>
                            <Lanfly04 src={Lanfly4}></Lanfly04>
                            <Mascot01 src={Mascot1}></Mascot01>
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}

