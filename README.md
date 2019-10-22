### react-plug

🔥 Small utility library implementing react hooks

## Install

```bash
yarn add @nobuti/react-plug
```

## Usage

```
import React from "react";
import ReactDOM from "react-dom";

import {useWindowSize} from "@nobuti/react-plug";

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

### useMount

```jsx
useMount(() => console.log(`I'm mounted`));
```

### useUnMount

```jsx
useUnMount(() => console.log(`I'm going to unmount`));
```


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

### useOnline

```jsx
const online = useOnline();
```

### usePageHidden

```jsx
const pageHidden = usePageHidden();
```

### useScrollPosition

```jsx
const {x, y} = useScrollPosition();
```
