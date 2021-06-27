import { Component } from '../lib/react/index.js'
import styled from '../lib/style-components.js'

const ActionsStyled = styled.div`
  display: grid;
  grid-template-columns: minmax(26.25rem, 1fr) 2fr;
`

class Actions extends Component {
  render() {
    const { children } = this.props
    return ActionsStyled({
      class: 'actions',
      children,
    })
  }
}

export default Actions