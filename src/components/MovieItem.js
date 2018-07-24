import React from 'react';
import './MovieItem.css';

class MovieItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false
    };

  }

  showDetails() {
    const { showDetails } = this.state;
    this.setState({ showDetails: !showDetails });
  }

  render() {
    const { movie } = this.props;
    const { overview, title, poster_path, release_date } = movie;

    return (
      <div
        className="movieItem"
        onClick={ e => this.showDetails() }
      >
        <div>
          <img className='poster' alt=''
            src={ poster_path ? `https://image.tmdb.org/t/p/w45/${poster_path}` : 'http://lexingtonvenue.com/media/poster-placeholder.jpg' }
          />
        </div>
        <div className="movieDetails">
          <div><strong>{ title }</strong>{` (${release_date.slice(0,4)})`}</div>
          <div className="overview"> { this.state.showDetails ? overview: '' }</div>
        </div>
      </div>
    );
  }
}


export { MovieItem };
