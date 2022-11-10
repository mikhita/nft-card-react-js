import React from 'react'
import styled from 'styled-components';
import nft from './assets/nft.png';
import eye from "./assets/Eye.png"

function Header() {
  return (
   <Img src={nft} alt="nft"/>
  )
}

export default Header

const Img = styled.img`
  &:hover{
    background-image: url(${eye});
    background: #00FFF8;
    opacity: 0.5;
    border-radius: 8px;
    
  }
`;