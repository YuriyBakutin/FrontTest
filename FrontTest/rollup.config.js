// import { rollup } from "rollup";
import image from '@rollup/plugin-image'
import resolve from '@rollup/plugin-node-resolve'
import typeScript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import {terser} from 'rollup-plugin-terser'
import replace from '@rollup/plugin-replace'
import scss from 'rollup-plugin-scss'
import clear from 'rollup-plugin-clear'
import path from "path"
import entryPoints from "./frontendEntryPoints"

const rootFolder = 'wwwroot';
const jsOutputFolder = path.join(rootFolder, 'js', 'build')
// const jsOutputFolder = path.join(rootFolder, 'js', 'build', 'Scripts');
const cssOutputFolder = path.join(rootFolder, 'css', 'build')

export default {
    input: entryPoints,
    output: {
        dir:  path.join(jsOutputFolder, 'Scripts'),
        format: 'esm',
        entryFileNames: '[name].js',
        chunkFileNames: '[name]-[hash].js',
    },
    plugins: [
        image(),
        resolve({
            mainFields: ['browser', 'module', 'main', ],
        }),
        scss({
            output: path.join(cssOutputFolder, 'bundle.css')
        }),
        vue(),
        typeScript({
            tsconfig: "tsconfig.json"
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        clear({
            targets: [jsOutputFolder, cssOutputFolder]
        }),
        terser(),
    ]
}
