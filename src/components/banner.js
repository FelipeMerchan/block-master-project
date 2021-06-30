import { Component, createElement } from '../lib/react/index.js'
import styled from '../lib/style-components.js'

import { PrimaryButton, GhostButton } from './primary-button.js'

const BannerStyled = styled.article`
  position: relative;
  inline-size: 100%;
  border-radius: .5rem;
  overflow: hidden;
`

const BannerCover = styled.figure`
  margin: 0;
`

const BannerCoverImage = styled.img`
  block-size: 19.375rem;
  inline-size: 100%;
  object-fit: cover;
`

const BannerButtonWrapper = styled.div`
  position: absolute;
  left:   2rem;
  bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  inline-size: 27.9rem;
`

class Banner extends Component {
  render() {
    return BannerStyled({
      children: [
        BannerCover({
          children: createElement('picture', {
            children: [
              createElement('source', {
                srcset: 'https://res.cloudinary.com/dy1xcx7kw/image/upload/v1621289886/block-master/mulan-cover-desktop_yjnnez.jpg',
                media: '(min-width: 1023px)'
              }),
              createElement('source', {
                srcset: 'https://res.cloudinary.com/dy1xcx7kw/image/upload/v1621289886/block-master/mulan-cover-desktop_yjnnez.jpg',
                media: '(min-width: 767px)'
              }),
              BannerCoverImage({
                srcset: 'https://res.cloudinary.com/dy1xcx7kw/image/upload/v1621289886/block-master/mulan-cover-desktop_yjnnez.jpg',
                alt: 'Mulán',
                title: 'Mulán',
                width: '1200',
                width: '310',
              })
            ]
          }),
        }),
        BannerButtonWrapper({
          children: [
            new PrimaryButton({
              children: createElement('i', {
                class: 'icon-play',
                style: 'padding-inline-end: .5rem; font-size: 1.5rem;'
              })
            }, 'Ver ahora'),
            new GhostButton({
              children: createElement('i', {
                class: 'icon-plus',
                style: 'padding-inline-end: .5rem; font-size: 1.5rem;'
              })
            },'Ver después'),
          ]
        })
      ]
    })
  }
}

export default Banner