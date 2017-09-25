import {createElement} from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';
import {createComponentFactory} from 'fela-bindings';
import {withTheme} from 'react-fela';

const propTypes = {
    renderer: PropTypes.object,
    theme: PropTypes.object,
};

const factory = createComponentFactory(createElement, withTheme, propTypes);

export function passThroughProps(props) {
    const keys = Object.keys(props);
    const index = keys.indexOf('innerRef');
    if (index !== -1) {
        keys.splice(index, 1);
    }
    return keys;
}

export default function withStyle(rule) {
    return Component => factory(rule, Component, passThroughProps);
}
