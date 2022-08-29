import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import Button from './Button';
import { Loader } from './Loader/Loader';
import { API_KEY } from './services/api.js';

export class App extends Component {
  state = {
    name: '',
    images: [],
    page: 1,
    status: 'idle',
    modal: false,
    currentImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      this.setState({ status: 'pending', images: [], page: 1 });
    }
    if (
      prevState.name !== this.state.name ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${this.state.name}&key=${API_KEY}&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=12`
      )
        .then(res => res.json())
        .then(({ hits }) => {
          if (hits.length === 0) {
            this.setState({ status: 'rejected' });
          } else {
            this.setState(({ images }) => ({
              images: [
                ...images,
                ...hits.map(({ id, tags, webformatURL, largeImageURL }) => {
                  return { id, tags, webformatURL, largeImageURL };
                }),
              ],
            }));
          }
        })
        .finally(() => {
          this.setState({ status: 'idle' });
        });
    }
    if (prevState.images !== this.state.images && this.state.page !== 1) {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleNameSubmit = name => {
    this.setState({ name });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleClickImage = image => {
    this.setState({ currentImage: image, modal: true });
  };

  handleCloseModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const { images, status, modal, currentImage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleNameSubmit} />
        {images.length > 0 && (
          <>
            <ImageGallery
              images={images}
              onClickImage={this.handleClickImage}
            />
            {status === 'pending' && <Loader />}
            <Button onLoadMore={this.handleLoadMore} />
          </>
        )}
        {modal === true && (
          <Modal currentImage={currentImage} onClose={this.handleCloseModal} />
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
