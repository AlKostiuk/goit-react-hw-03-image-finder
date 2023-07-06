import { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import {ImageGallery} from "./ImageGallery/ImageGallery";
import  { api } from "./Api/Api"





export class App extends Component  {
  state = {
  searchPrompt : "",
  arrOfImg: [],
  page: 1,
}


  handleSubmit =(event)=> {
    event.preventDefault()
    this.setState ({ searchPrompt:event.target.elements.search.value},
      async ()=>{
      const items = await api(this.state.page ,this.state.searchPrompt )
      this.setState({arrOfImg:items.data.hits})
    })
  }

  onClickLoadMore= async () => {
    const nextPage = this.state.page + 1;
    const items = await api(nextPage, this.state.searchPrompt);
    this.setState((prevState) => ({
      arrOfImg: [...prevState.arrOfImg, ...items.data.hits],
      page: nextPage,

    }));
  };


render () {
  return (
    <div>
     <SearchBar onSubmit={this.handleSubmit} />
     <ImageGallery images= {this.state.arrOfImg} onClick={this.onClickLoadMore}  />

    </div>
  );
};
}

