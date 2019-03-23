import React, { Component, createContext } from 'react';
import './Text.css';

const Context = createContext({ text: 'hello world' });

class Provider extends Component {
  state = {
    text: '',
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <Context.Provider value={{
        ...this.state,
        handleChange: this.handleChange,
      }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

class Input extends Component {
  static contextType = Context;

  render() {
    return (
      <textarea
        className="textarea"
        value={this.context.text}
        onChange={this.context.handleChange}
      />
    );
  }
}

class Preview extends Component {
  render() {
    return (
      <Context.Consumer>
        {({ text }) => (
          <div className="preview">
            {text}
            <span className="count">{text.length}</span>
          </div>
        )}
      </Context.Consumer>
    );
  }
}

class Text extends Component {
  render() {
    return (
      <Provider>
        <div className="container">
          <Input />
          <Preview />
        </div>
      </Provider>
    )
  }
}

export { Text };
