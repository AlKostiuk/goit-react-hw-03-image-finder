import { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { api } from "./Api/Api";

export class App extends Component {
  state = {
    searchPrompt: "",
    arrOfImg: [],
    page: 1,
    showLoadMore: true,
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const searchPrompt = event.target.elements.search.value;
    const items = await api(1, searchPrompt);
    this.setState({
      searchPrompt,
      arrOfImg: items.data.hits,
      page: 1,
      showLoadMore: items.data.hits.length > 0,
    });
  };

  onClickLoadMore = async () => {
    const nextPage = this.state.page + 1;
    const items = await api(nextPage, this.state.searchPrompt);

    this.setState((prevState) => ({
      arrOfImg: [...prevState.arrOfImg, ...items.data.hits],
      page: nextPage,
      showLoadMore: items.data.hits.length > 0,
    }));
  };

  render() {
    const { arrOfImg, showLoadMore } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery images={arrOfImg} onClick={this.onClickLoadMore} />
        {!showLoadMore && arrOfImg.length > 0 && (
          <p>No more images to load.</p>
        )}
      </div>
    );
  }
}
