# fela-react-helpers · [![npm](https://img.shields.io/npm/v/fela-react-helpers.svg)](https://www.npmjs.com/package/fela-react-helpers)

## API

### `withStyle`

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import {withStyle} from 'fela-react-helpers';

const rule = props => ({
  color: props.color,
  backgroundColor: '#f00',
});

@withStyle(rule)
/**
 * `react-styleguidist` will like these
 */
class Button extends React.Component {
  static propTypes = {
    /** prop types just work */
    color: PropTypes.string,
  };

  static defaultProps = {
    /** and default props too */
    color: 'red',
  };

  render() {
    const {className, children} = this.props;
    return <button className={className}>{children}</button>;
  }
}
```

---

### `renderToPrettyString`

Formats CSS from `fela` renderer with [`js-beautify`](https://github.com/beautify-web/js-beautify).

```js
import {renderToPrettyString} from 'fela-react-helpers/testTools';

const renderer = createRenderer();

// ...
// Usually you will render a React component here
// ...

const styles = renderToPrettyString(renderer, {indent_size: 4});
```
