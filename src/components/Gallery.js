import React, { Component } from 'react'
import styled from 'styled-components';
import Chromepic from '../images/pic_Lantern/โคม.png'
import Vectorpic from '../images/cloud/cloud1.png'
import Pic01 from '../images/image_gallery/gal1.jpg'
import Pic03 from '../images/image_gallery/gal3.jpg'
import Pic02 from '../images/image_gallery/gal2.jpg'
import Pic05 from '../images/image_gallery/gal5.jpg'    

const Container = styled.div`
    // background-color:yellow;
    background-color: rgba(28, 18, 57, 1); 
    width: 100%;
    height:auto;
    min-height: 100vh; 
    padding-bottom: 300px;
    padding-top: 50px;
    
`
const Chrome = styled.img`
    position: absolute;
    width: 243px;
    height: 259.65px;
    left: 1183px;
    top: 169px;
`
const Vector = styled.img`
    position: absolute;
    left: 30.56%;
    right: 31.88%;
    top: 15.04%;
    bottom: 68.85%;
`
const Pic1 = styled.img`
    position: absolute;
    width: 466px;
    height: 397px;
    left: 486px;
    top: 299px;

`
const Pic3 = styled.img`
    position: absolute;
    width: 223px;
    height: 191px;
    left: 255px;
    top: 760px;
`
const Pic2 = styled.img`
    position: absolute;
    width: 223px;
    height: 191px;
    left: 496px;
    top: 760px;
`
const Pic5 = styled.img`
    position: absolute;
    width: 223px;
    height: 191px;
    left: 978px;
    top: 760px;
`


export default class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                <Chrome src={Chromepic}></Chrome>
                <Vector src={Vectorpic}></Vector>
                <Pic1 src={Pic01}></Pic1>
                <Pic3 src={Pic03}></Pic3>
                <Pic2 src={Pic02}></Pic2>
                <Pic5 src={Pic05}></Pic5>
                </Container>
            </React.Fragment>
        )
    }
}