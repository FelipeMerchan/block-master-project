import { Component } from '../lib/react/index.js'
import styled from '../lib/style-components.js'

import Banner from './banner.js'

const BannerSliderStyled = styled.section`
  margin-block-start: 1.5rem;
  margin-block-end:   3.5rem;
  block-size: 19.375rem;
`

$(document).ready(function(){
  $('.banner-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    width: 166,
    arrows: false,
  });
});

class BannerSlider extends Component {
  render() {
    return BannerSliderStyled({
      class: 'banner-slider',
      children: [
        new Banner(),
        new Banner(),
        new Banner(),
      ]
    })
  }
}

export default BannerSlider