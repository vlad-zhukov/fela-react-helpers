import {createRenderer} from 'fela';
import {renderToPrettyString} from '../src/testTools';

function felaRenderer() {
    const fela = createRenderer();
    fela.renderStatic({boxSizing: 'border-box', margin: 0}, 'html,body');
    fela.renderStatic({fontSize: '14px'}, 'p');
    return fela;
}

it('should prettify styles', () => {
    const renderer = felaRenderer();
    expect(renderToPrettyString(renderer)).toMatchSnapshot();
});
