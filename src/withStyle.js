import {createComponent} from 'react-fela';

export default function withStyle(rule) {
    return Component => createComponent(rule, Component, Object.keys);
}
