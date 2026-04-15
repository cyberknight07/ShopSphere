import React from 'react'
import { Header } from '../styled-components/Header.styles'
import { RowContainer } from '../styled-components/RowContainer.styles'
import { colors } from '../../utililty/themeColor'
import { CartIcon, LoginIcon } from './SVGIcons'

const HeaderSection = () => {
  return (
    <Header>
       <RowContainer>
        <span style={{color: colors.primary.base, fontSize: 32, fontWeight: 800}} onclick = {()=> {n}}>Digital Atrium</span>
       </RowContainer>
       <RowContainer>
        <input type='text' placeholder='Search the desire' style={{backgroundColor:colors.neutral.shades[7], color: colors.neutral.shades[5]}} />
        <button><CartIcon size={24}/></button>
        <button><LoginIcon size={24}/></button>
       </RowContainer>
    </Header>
  )
}

export default HeaderSection