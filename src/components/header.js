import { Component } from '../lib/react/index.js'
import styled from '../lib/style-components.js'

import Wrapper from './wrapper.js'

const HeaderStyled = styled.header`
  margin-bottom: 2em;
  text-align: center;
`

const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 6.625rem minmax(26.25rem, 1fr) 2fr;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  block-size: 7rem;
  inline-size: 100%;
  padding-inline-start: 1.5rem;
  padding-inline-end:   1.5rem;
`

const HeaderLogoWrapper = styled.figure`
  inline-size: 6.625rem;
  block-size: 4rem;
  margin: 0;
`

const HeaderLogo = styled.img`
  inline-size: 100%;
`

class Header extends Component {
  render() {
    return HeaderStyled({
      children: Wrapper({
        children: HeaderContent({
          children: HeaderLogoWrapper({
            children: HeaderLogo({
              src: './images/logo.png',
              alt: 'Logo de Block Master',
              title: 'Logo de Block Master',
              width: '106',
              height: '64',
            })
          })
        })
      })
    })
  }
}

export default Header