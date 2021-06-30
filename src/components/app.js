import { Component } from '../lib/react/index.js'
import styled from '../lib/style-components.js'
import Header from './header.js'
import BannerSlider from './banner-slider.js'
import MovieList from './movie-list.js'

const AppStyled = styled.div`
  background-color: #0F0E17;
`

class App extends Component {
  render() {
    return AppStyled({
      children: [
        new Header(),
        new BannerSlider(),
        new MovieList(),
      ]
    })
  }
}

export default App