import ImageGalleryItem from 'components/ImageGalleryItem/ImageGallaryItem';
import style from './imagegallery.module.css';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGallery extends Component {
  state = {
    showModal: false,
    bigImg: '',
    isLoading: true,
  };

  openModal = (img) => {
    window.addEventListener('keydown', this.closeModal);
    this.setState({
      showModal: true,
      bigImg: img.largeImageURL,
      isLoading: true,
    });

    new Promise((resolve) => {
      setTimeout(resolve, 1000);
    }).then(() => {
      this.setState({ isLoading: false });
    });
  };

  closeModal = (evt) => {
    if (evt && evt.key === 'Escape') {
      this.setState({ showModal: false, isLoading: false });
    } else {
      this.setState({ showModal: false, isLoading: false });
      window.removeEventListener('keydown', this.closeModal);
    }
  };

  handleCloseModalOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.closeModal();
    }
  };

  render() {
    const pictures = this.props.images.map((img) => (
      <ImageGalleryItem
        key={img.id}
        item={img}
        onClick={() => this.openModal(img)}
      />
    ));

    console.log('images :>> ', this.props.images);

    return (
      <>
        <ul className={style.imagelist}>
          {pictures}
        </ul>
        {this.props.images.length > 0 && (
          <button className={style.loadmorebtn} onClick={this.props.onClick}>
            Load More
          </button>
        )}
        {this.state.showModal && (
          <Modal
            picture={this.state.bigImg}
            onClose={this.closeModal}
            isLoading={this.state.isLoading}
          />
        )}
      </>
    );
  }
}
