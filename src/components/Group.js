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


const Container = styled.div`
    //background-color:yellow;
    background-color: rgba(28, 18, 57, 1);
    width: 100%;
    height:auto;
    min-height: 100vh; 
    padding-bottom: 300px;
    padding-top: 50px;
    
`
const Moon02 = styled.img`
    position: absolute;
    width: 377px;
    height: 377px;


`

const Wave01 = styled.img`
    position: absolute;
    width: 1553.42px;
    height: 428.19px;
 

`
const Wave02 = styled.img`
    position: absolute;
    width: 1565.58px;
    height: 343.89px;
    transform: rotate(3deg);

`
const Wave03 = styled.img`
    position: absolute;
    width: 1549.52px;
    height: 325.42px;
   transform: rotate(3.5deg);

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

`
const T1 = styled.p`
    position: absolute;
    width: 345px;
    height: 86px;

`
const T2 = styled.p`
   position: absolute;
    width: 223px;
    height: 94px;

`
const T3 = styled.p`
   position: absolute;
    width: 223px;
    height: 94px;

`
const T4 = styled.p`
   position: absolute;
    width: 223px;
    height: 94px;

`
const T5 = styled.p`
   position: absolute;
    width: 223px;
    height: 94px;

`
const T6 = styled.p`
   position: absolute;
    width: 223px;
    height: 94px;

`

const Text = styled.p`
    font-family: Caveat;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
    text-align: center;

    color: #FFFFFF;
`


export default class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                
                {/*<Moon02 src={Moon2}></Moon02>}
                {<Mlan src={manylan}></Mlan>}
                {<Text><T1>"มาย" <br />[Web Design]</T1></Text>}
                {<Text><T2>"โอ๊ต" <br />[Web Design]</T2></Text>}
                {<Text><T3>"แบม" <br />[Front-End]</T3></Text>}
                {<Text><T4>"มาย" <br />[Front-End]</T4></Text>}                
                {<Text><T6>"ท๊อป" <br />[Infra]</T6></Text>}
                {<Ylan2 src={yellowlan}></Ylan2>}
                {<PPlan src={purplelan}></PPlan>}
                {<Wave01 src={wave1}></Wave01>} 
                {<Text><T5>"ไผ่" <br />[Front-End]</T5></Text>}
                {<Plan2 src={pinklan}></Plan2>}               
                {<Wave02 src={wave2}></Wave02>}                
                {<Ylan src={yellowlan}></Ylan>}
                {<Plan src={pinklan}></Plan>}
                {<Plan3 src={pinklan}></Plan3>}
                {<Wave03 src={wave3}></Wave03>*/}
                
                </Container>
            </React.Fragment>
        )
    }
}