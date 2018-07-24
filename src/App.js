import React, { Component } from 'react';
import axios from 'axios';
import { Search, MovieList, Pagination } from './components';
import { API_KEY } from './config';
import './App.css';

const URL = 'https://api.themoviedb.org/3/search/movie?api_key=';

class App extends Component {

  constructor() {
    super()
    this.state = {
      query: '',
      movies: [],
      pageCount: 0,
      resultsCount: 0,
      loading: false,
      page: 0
    }

    this.timer = null;
  }

  handleSearchChange(e) {
    const { page } = this.state;
    const query = e.target.value.toLowerCase();

    if (query !== '') {
      this.setState({ query, loading: true, page: 0 });

      // debounce
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(
        () => {
          axios.get(`${URL}${API_KEY}&language=en-US&query=${query}&page=1`)
            .then( resp => {
              const { results, total_pages, total_results } = resp.data;
              this.setState({ movies: results, pageCount: total_pages, resultsCount: total_results, loading: false });
            })
            .catch( err => this.setState({ movies: [], loading: false }));}
          , 200 );
    } else {
      this.setState({ query: '', movies: [], pageCount: 0, resultsCount: 0 });
    }
  }

  handlePageChange(e) {
    const { query } = this.state;
    this.setState({ loading: true, page: e.selected })
    const page = e.selected + 1;

    axios.get(`${URL}${API_KEY}&language=en-US&query=${query}&page=${page}`)
      .then( resp => {
        const { results, total_pages } = resp.data;
        this.setState({ movies: results, pageCount: total_pages, loading: false });
      })
      .catch( err => this.setState({ movies: [], loading: false }));
  }

  render() {
    const { query, movies, resultsCount, page, pageCount, loading } = this.state;
    return (
      <div className="app">
        <h1>Search Movies!</h1>
        <Search
          handleSearchChange={ e => this.handleSearchChange(e)}
          query={query}
        />
        <MovieList movies={movies} loading={loading} />
        { resultsCount !== 0 && <Pagination pageCount={pageCount} current={page} onPageChange={ e => this.handlePageChange(e) } /> }
      </div>
    );
  }
}

export default App;
