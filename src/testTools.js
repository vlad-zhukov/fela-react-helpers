import {renderToString} from 'fela-tools';
import prettier from 'prettier';

// eslint-disable-next-line import/prefer-default-export
export function renderToPrettyString(renderer) {
    const css = renderToString(renderer);
    return `\n${prettier.format(css, {parser: 'postcss'})}`;
}
