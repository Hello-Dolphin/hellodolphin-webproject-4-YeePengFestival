import React, { Component } from 'react'
import styled from 'styled-components';
import Moon2 from '../images/pic_Lantern/Moon2.png';
import wave1 from '../images/pic_Lantern/wave1.png';
import wave2 from '../images/pic_Lantern/wave2.png';
import wave3 from '../images/pic_Lantern/wave3.png';
import yellowlan from '../images/pic_Lantern/yellowlan.png';
import pinklan from '../images/pic_Lantern/pinklan.png';
import purplelan from '../images/pic_Lantern/purplelan.png';
import manylan from '../images/pic_Lantern/manylan.png';
import cloud4 from '../images/cloud/cloud4.png';
import cloud3 from '../images/cloud/cloud3.png';


const Container = styled.div`
    
    background-color: rgba(28, 18, 57, 1);
    width: 100%;
    height:auto;
    min-height: 100vh; 
    max-height: 150vh; 
    padding-bottom: 300px;
    padding-top: 50px;
    overflow : hidden;
    
`
const Moon02 = styled.img`

    width: 377px;
    height: 377px;
    display:block;  
    margin-top:180px;
    position:absolute;
    margin-left:25%;
    z-index: 1;

`
const Cloud03 = styled.img`
    position: absolute;
    width: 381px;
    height: 134px;
    margin-left: 30% ;
    margin-top: 29% ;
    z-index: 0;
    

`
const Cloud04 = styled.img`
    position: absolute;
    width: 381px;
    height: 134px;
    margin-left: 20% ;
    margin-top: 29% ;
    z-index: 0;

`
const Wave01 = styled.img`
    position: absolute ;
    width: 100%;
    height: 428.19px;  
    margin-top: 55% ;
    margin-left:-15% ;
    z-index: 0;
    overflow:hidden;

`
const Wave02 = styled.img`
    position: absolute;
    width: 100%;
    height: 343.89px;
    transform: rotate(-3.7deg);
    margin-top: 60% ;
    margin-left:-10% ;
    z-index: 1;
    overflow:hidden;
`
const Wave03 = styled.img`
    position: absolute;
    width: 100%;
    height: 325.42px;
    transform: rotate(5deg);
    margin-top: 65% ;
    margin-left:-16% ;
    z-index: 2;
    overflow:hidden;
`
const Ylan = styled.img`
    position: absolute;
    width: 109px;
    height: 166px;
    

`
const Ylan2 = styled.img`
    position: absolute;
    width: 109px;
    height: 166px;
    

`
const Plan = styled.img`
    position: absolute;
    width: 156px;
    height: 168.5px;
    

`
const Plan2 = styled.img`
    position: absolute;
    width: 156px;
    height: 168.5px;
    

`
const Plan3 = styled.img`
   position: absolute;
    width: 156px;
    height: 168.5px;
    

`
const PPlan = styled.img`
   position: absolute;
    width: 179px;
    height: 152px;
    
`
const Mlan = styled.img`
   position: absolute;
    width: 246px;
    height: 260px;
    margin-top:10%;
    margin-left:65%;
    
`
const T1= styled.p`
    position: absolute;
    width: 345px;
    height: 86px;
    font-family: 'Prompt', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    color: #FFFFFF;
    margin-left: ;
    margin-right: ;
    
`





export default class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <Container >
                <div class="container" id="group">


                <Moon02 src={Moon2}></Moon02>
                <Mlan src={manylan}></Mlan>
                <Cloud03 src={cloud3}></Cloud03>
                <Cloud04 src={cloud4}></Cloud04>
                {/* <Wave01 src={wave1}></Wave01>
                <Wave02 src={wave2}></Wave02>
                <Wave03 src={wave3}></Wave03> */}
                {/* <Text><T1>"มาย" <br />[Web Design]</T1>></Text>
                <Text><T2>"โอ๊ต" <br />[Web Design]</T2></Text>
                <Text><T3>"แบม" <br />[Front-End]</T3></Text>
                <Text><T4>"มาย" <br />[Front-End]</T4></Text>               
                <Text><T6>"ท๊อป" <br />[Infra]</T6></Text> */}
                {/* <Ylan2 src={yellowlan}></Ylan2>
                <PPlan src={purplelan}></PPlan>
                <Wave01 src={wave1}></Wave01> 
                {/* <Text><T5>"ไผ่" <br />[Front-End]</T5></Text> */}
                {/* <Plan2 src={pinklan}></Plan2>               
                <Wave02 src={wave2}></Wave02>                
                <Ylan src={yellowlan}></Ylan>
                <Plan src={pinklan}></Plan>
                <Plan3 src={pinklan}></Plan3>
                <Wave03 src={wave3}></Wave03>  */}


                </div>
                </Container>
            </React.Fragment>
        )
    }
}