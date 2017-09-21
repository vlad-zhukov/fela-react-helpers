import {passThroughProps} from '../src/withStyle';

const props = {
    foo: 'foo',
    bar: {deep: 'bar'},
    baz: undefined,
    innerRef: () => {},
};

it('should return an array and omit innerRef', () => {
    const passed = passThroughProps(props);
    expect(Array.isArray(passed)).toBeTruthy();
    expect(passed).toMatchSnapshot();
});
