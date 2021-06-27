import { Component } from '../lib/react/index.js'
import styled from '../lib/style-components.js'
import Header from './header.js'

const AppStyled = styled.div`
  background-color: #0F0E17;
`

class App extends Component {
  render() {
    return AppStyled({
      children: [
        new Header(),
      ]
    })
  }
}

export default App