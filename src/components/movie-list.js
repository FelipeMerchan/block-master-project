import { Component } from '../lib/react/index.js'
import styled from '../lib/style-components.js'

import Wrapper from './wrapper.js'
import Movie from './movie.js'
import store from '../store.js'
import api from '../api.js'
import { ADD_MOVIES } from '../actions/index.js'

const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 13.75rem);
  justify-content: center;
  box-sizing: border-box;
  gap: 3rem 1.5625rem;
`

class MovieList extends Component {
  state = {
    page: 1
  }

  handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      this.getPage(this.state.page)
      this.setState({
        page: this.state.page + 1
      })
    }
  }

  getPage = async (page) => {
    const { results } = await api.moviePage(page)
    store.dispatch({
      type: ADD_MOVIES,
      payload: results
    })
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState()
    })
    const observer = new IntersectionObserver(this.handleIntersection)
    observer.observe(window.intersector)
  }

  render() {
    const state = store.getState()
    const movieListId = state.list[state.filter]
    const movieList = state.movieList
    return Wrapper({
      children: MovieListStyled({
        children: movieListId.map(id => new Movie(movieList.get(id))),
      })
    })
  }
}

export default MovieList