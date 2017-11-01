import {createComponentWithProxy} from 'react-fela';

export default function withStyle(rule) {
    return Component => createComponentWithProxy(rule, Component);
}
