import { Component } from '../lib/react/index.js'
import styled from '../lib/style-components.js'

import Wrapper from './wrapper.js'
import Movie from './movie.js'
import store from '../store.js'

const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 13.75rem);
  justify-content: center;
  box-sizing: border-box;
  gap: 3rem 1.5625rem;
`

class MovieList extends Component {
  state = {
    movies: store.getState().movieList,
  }

  render() {
    const { movies } = this.state
    return Wrapper({
      children: MovieListStyled({
        children: movies.map(movie => new Movie(movie)),
      })
    })
  }
}

export default MovieList