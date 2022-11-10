import React from 'react'
import styled from 'styled-components'

function TextContent() {
  return (
    <Div>
        <H1>Equilibrium #3429</H1>
        <P>Our Equilibrium collection promotes balance and calm.</P>
    </Div>
  )
}

export default TextContent

const Div = styled.div`
    
`;
const H1 = styled.h1`
   
    font-family: Outfit;
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: left;
    color: #FFFFFF;
    &:hover{
        color: #00FFF8;
        cursor: pointer;
    }

`;

const P = styled.p`
   
    font-family: Outfit;
    font-size: 18px;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
    color: #8BACD9;
    width: 300px;

`;