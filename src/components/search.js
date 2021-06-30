import { Component, createElement } from "../lib/react/index.js"
import styled from '../lib/style-components.js'

import Form from './form.js'
import Input from './input.js'
import Button from './button.js'

class Search extends Component {
  render() {
    return Form({
      children: [
        new Input({
          placeholder: 'Escribe tu película favorita',
          name: 'title',
          type: 'search',
        }),
        new Button({
          children: createElement('i', {
            class: 'icon-search',
            style: 'font-size: 1.5rem; color: #000000;'
          })
        })
      ]
    })
  }
}

export default Search