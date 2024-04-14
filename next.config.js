/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// /** @type {import('next').NextConfig} */
// const path = require("path");
// const stylexPlugin = require("@stylexjs/nextjs-plugin");
// const babelrc = require("./.babelrc.js");
// const plugins = babelrc.plugins;
// const [_name, options] = plugins.find(
//   (/** @type {string[]} */ plugin) => Array.isArray(plugin) && plugin[0] === "@stylexjs/babel-plugin"
// );
// const rootDir = options.unstable_moduleResolution.rootDir ?? __dirname;
// const aliases = options.aliases ?? undefined;
// const useCSSLayers = options.useCSSLayers ?? undefined;

// module.exports = stylexPlugin({ rootDir, aliases, useCSSLayers })({
//   transpilePackages: ["@stylexjs/open-props"],
// });
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
/** @type {import('next').NextConfig} */
const path = require("path");
const stylexPlugin = require("@stylexjs/nextjs-plugin");
const babelrc = require("./.babelrc.js");
const plugins = babelrc.plugins;
const [_name, options] =
  (plugins || []).find(
    (/** @type {string[]} */ plugin) =>
      Array.isArray(plugin) && plugin[0] === "@stylexjs/babel-plugin"
  ) || [];
const rootDir = options?.unstable_moduleResolution.rootDir ?? __dirname;
const aliases = options?.aliases ?? undefined;
const useCSSLayers = options?.useCSSLayers ?? undefined;

module.exports = stylexPlugin({ rootDir, aliases, useCSSLayers })({
  transpilePackages: ["@stylexjs/open-props"],
});
