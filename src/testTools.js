import {renderToString} from 'fela-tools';
import {css} from 'js-beautify';

const defaultOptions = {
    indent_size: 2,
    end_with_newline: true,
    selector_separator_newline: false,
    newline_between_rules: false,
};

// eslint-disable-next-line import/prefer-default-export
export function renderToPrettyString(renderer, options = {}) {
    const styles = renderToString(renderer);
    return `\n${css(styles, Object.assign({}, defaultOptions, options))}`;
}
