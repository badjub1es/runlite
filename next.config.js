/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// /** @type {import('next').NextConfig} */
// const path = require("path");
// const stylexPlugin = require("@stylexjs/nextjs-plugin");
// const babelrc = require("./.babelrc.js");
// const plugins = babelrc.plugins;
// const [_name, options] =
//   (plugins || []).find(
//     (plugin) => typeof plugin === 'object' && plugin[0] === "@stylexjs/babel-plugin"
//   ) || [];

// const rootDir = typeof options === 'object' ? options.unstable_moduleResolution?.rootDir ?? __dirname : __dirname;
// const aliases = typeof options === 'object' ? options.aliases ?? undefined : undefined;
// const useCSSLayers = typeof options === 'object' ? options.useCSSLayers ?? undefined : undefined;

// module.exports = stylexPlugin({ rootDir, aliases, useCSSLayers })({
//   transpilePackages: ["@stylexjs/open-props"],
// });
const path = require('path');
const stylexPlugin = require('@stylexjs/nextjs-plugin');

module.exports = stylexPlugin({
  aliases: {
    '@/*': [path.join(__dirname, '*')],
  },
  rootDir: __dirname,
})({});
