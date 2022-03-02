import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <div>
        <Container>
            <Content>
                <ImageOne src='/images/cta-logo-one.svg'/>
                <SingUp>GET ALL THERE</SingUp>
                <Description>
                ​Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <ImageTwo src='/images/cta-logo-two.png'/>

            </Content>
        </Container>
    </div>
  )
}

export default Login
const Container=styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display:flex;
    justify-content:center;
    align-items:top;
    &:before{
        position: absolute;
        content:"";
        top:0;
        bottom:0;
        left:0;
        right:0;
        background: url('/images/login-background.jpg') center center /cover 
        no-repeat fixed;
        background-position:top;
        z-index:-1;
        opacity:0.7;
    }
`
const Content=styled.div`
    max-width:650px;
    padding:80px 40px;
    width:90%;
    display:flex;
    flex-direction:column;
    margin-top: 100px;
    align-items:center;

`
const ImageOne=styled.img`
`
const ImageTwo=styled.img`
    width:90%;
`
const SingUp=styled.a`
    width:100%;
    background-color:#0063e5;
    font-weight: bold;
    padding:17px 0;
    color: #f9f9f9;
    border-radius:4px;
    text-align:center;
    font-size: 18px;
    cursor:pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom:20px;
    &:hover{
        background:#0483ee;
    }
`
const Description=styled.p`
    font-size: 13px;
    letter-spacing: 1.5px;
    text-align:center;
    line-height:1.5;

`