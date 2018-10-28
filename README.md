### react-plug

🔥 Small utility library implementing react hooks

☢️ Hooks are in beta phase, use this library only for experimentation

## Install

```bash
yarn add react-plug
```

## Usage

```
import React from "react";
import ReactDOM from "react-dom";

import {useWindowSize} from "react-plug";

import "./styles.css";

const App = () => {
  const size = useWindowSize();

  return (
    <div className="App">
      <h1>Hello React Hooks</h1>
      <h2>Resize the window and see its size below</h2>
      {size && (
        <div>
          ({size.width}, {size.height})
        </div>
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Example

[View example in CodeSandbox](https://codesandbox.io/s/vq97rq9kv0)

### useWindowSize

```jsx
const size = useWindowSize({delay: 50});
```

Options:
- delay: number of miliseconds to debounce. Default to 100 miliseconds.

### useKeypress

```jsx
const key = useKeypress({keys: [13, 27]});
```

Options:
- keys: array of key codes you want to catch.