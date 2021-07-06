import { Component, createElement } from "../lib/react/index.js"
import store from '../store.js'
import { SEARCH_MOVIE, SET_FILTER } from '../actions/index.js'

import Form from './form.js'
import Input from './input.js'
import Button from './button.js'

class Search extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const query = formData.get('query')
    if (query) {
      return store.dispatch({
        type: SEARCH_MOVIE,
        payload: query,
      })
    }
    return store.dispatch({
      type: SET_FILTER,
      payload: 'all'
    })
  }

  render() {
    return Form({
      onSubmit: this.handleSubmit,
      children: [
        new Input({
          placeholder: 'Escribe tu película favorita',
          name: 'query',
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