import { Component } from 'react';
import axios from 'axios';
import { Context } from '../context';

const imagesService = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
});

class Api extends Component {
  static contextType = Context;

  state = {
    loading: false,
    error: null,
  }

  async componentDidMount() {
    const { images, page, addImages } = this.context;

    if (images[page]) {
      return;
    }

    this.setState({ loading: true });
    const { path } = this.props;

    try {
      const { data } = await imagesService(path, {
        params: {
          _page: page,
          _limit: 9,
        }
      });
      addImages(data);
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return this.props.children(this.state);
  }
}

export { Api };
