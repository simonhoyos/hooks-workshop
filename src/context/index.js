import React, { Component, createContext } from 'react';

let Context;
const { Consumer, Provider } = Context = createContext();

class PaginationProvider extends Component {
  state = {
    page: 1,
    images: {},
  }

  handlePrev = e => {
    this.setState(prevState => ({ page: prevState.page - 1 }));
  }

  handleNext = e => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  addImages = data => {
    const images = {
      ...this.state.images,
      [this.state.page]: data,
    }

    this.setState({ images });
  }

  render() {
    return (
      <Provider value={{
        ...this.state,
        handlePrev: this.handlePrev,
        handleNext: this.handleNext,
        addImages: this.addImages,
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export { Context, PaginationProvider, Consumer as PaginationConsumer };
