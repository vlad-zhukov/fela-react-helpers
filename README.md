# fela-react-helpers · [![npm](https://img.shields.io/npm/v/fela-react-helpers.svg)](https://www.npmjs.com/package/fela-react-helpers)

## API

### `withStyle`

```jsx
import React from 'react';
import {withStyle} from 'fela-react-helpers';

const rule = props => ({
  color: props.color,
  backgroundColor: '#f00',
});

@withStyle(rule)
class Button extends React.Component {
  render() {
    const {className, children} = this.props;
    return <button className={className}>{children}</button>;
  }
}
```

---

### `renderToPrettyString`

```js
import {renderToPrettyString} from 'fela-react-helpers/testTools';

const renderer = createRenderer();

// ...
// Usually you will render a React component here
// ...

const styles = renderToPrettyString(renderer);
// `styles` will be a string with CSS code formatted with Prettier
```
