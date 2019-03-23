import React, {
  Component,
  createContext,
  useContext,
  useState,
} from 'react';
import './Text.css';

const Context = createContext({ text: 'hello world' });

function Provider(props) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <Context.Provider value={{
      text,
      handleChange,
    }}>
      {props.children}
    </Context.Provider>
  );
}

function Input() {
  const context = useContext(Context);

  return (
    <textarea
      className="textarea"
      value={context.text}
      onChange={context.handleChange}
    />
  );
}

function Preview() {
  const context = useContext(Context);

  return (
    <div className="preview">
      {context.text}
      <span className="count">{context.text.length}</span>
    </div>
  );
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
