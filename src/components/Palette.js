import React from 'react';
import InstaService from '../services/instaService';
import ErrorMessage from './Error';
import Loading from './Loading';

export default class Palette extends React.Component {
  InstaService = new InstaService();
  state = {
    error: false,
    photos: [],
    loading: true
  };

  componentDidMount() {
    this.updatePhotos();
  }

  updatePhotos = () => {
    this.InstaService.getAllPhotos()
      .then(this.onPhotosLoaded)
      .catch(this.onError);
  };

  onError = () => {
    this.setState({ error: true });
  };

  onPhotosLoaded = photos => {
    this.setState({
      error: false,
      photos,
      loading: false
    });
  };

  renderItems = arr => {
    return arr.map(item => {
      //   const { src, alt } = item;
      return <img src={item.src} alt={item.alt} />;
    });
  };

  render() {
    const { error, photos, loading } = this.state;
    if (error) {
      return <ErrorMessage />;
    }
    if (loading) {
      return <Loading />;
    }
    const items = this.renderItems(photos);

    return <div className='palette'>{items}</div>;
  }
}
