import {createElement} from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';
import {createComponentFactory} from 'fela';

const propTypes = {
    renderer: PropTypes.object,
    theme: PropTypes.object,
};

const factory = createComponentFactory(createElement, propTypes);

function passThroughProps(props) {
    return Object.keys(props);
}

// eslint-disable-next-line import/prefer-default-export
export function withStyle(rule) {
    return Component => factory(rule, Component, passThroughProps);
}
