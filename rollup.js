/* eslint-disable import/no-extraneous-dependencies */

const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const pkg = require('./package.json');

const plugins = [babel()];
const external = Object.keys(pkg.dependencies).concat(Object.keys(pkg.peerDependencies));

rollup
    .rollup({
        input: './src/index.js',
        plugins,
        external,
    })
    .then((bundle) => {
        bundle.write({
            file: pkg.main,
            format: 'cjs',
            sourcemap: true,
        });
        bundle.write({
            file: pkg.module,
            format: 'es',
            sourcemap: true,
        });
    })
    .catch((e) => {
        console.log(e);
    });

rollup
    .rollup({
        input: './src/testTools.js',
        plugins,
        external,
    })
    .then((bundle) => {
        bundle.write({
            file: './dist/fela-react-helpers.testTools.js',
            format: 'cjs',
            sourcemap: true,
        });
    })
    .catch((e) => {
        console.log(e);
    });
