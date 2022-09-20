import React from 'react';
import fetchPictures from '../services/pixabay-API';
import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends React.Component {
  state = {
    query: '',
    page: 1,
    images: [],
  };
  changeQuery = value => {
    this.setState({ query: value });
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      const newArr = await fetchPictures(this.state.query, this.state.page);

      this.setState({ images: [...newArr] });
    }
  }

  render() {
    return (
      <div>
        <Searchbar changeQuery={this.changeQuery} />
        <ImageGallery imageArray={this.state.images} />
      </div>
    );
  }
}
export default App;
