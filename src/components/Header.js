import React from 'react'
import styled from 'styled-components';
import nft from './assets/nft.png';
import eye from "./assets/Eye.svg"

function Header() {
  return (
    <Div>
      <Img  src={nft} alt="nft"/>
      <DivImage>
        
      </DivImage>
      <ImgEye id='img1' src={eye} alt="eyeImage"/>
   </Div>
  )
}

export default Header

const Img = styled.img`

  &:hover{
    opacity: 0.5;
  }
`;

const Div = styled.div`
&:hover div{
  display: block;
  cursor: pointer;
  opacity: 0.5;
}
&:hover #img1{
  opacity: 1;
  cursor: pointer;
  display: block;
}

`;
const DivImage = styled.div`
  background-color: #00FFF8;
  width: 300px;
  height: 300px;
  position: absolute;
  /* opacity: 0.5; */
  border-radius: 8px;
  bottom: 45%;
  display: none;
`;
const ImgEye = styled.img`
  position: absolute;
  bottom:67%;
  left: 44%;
  display: none;

`;