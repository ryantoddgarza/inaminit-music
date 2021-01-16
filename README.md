# Inaminit Music

Inaminit Music is an independent record label.

Site is live at [inaminitmusic.com](https://inaminitmusic.com).

## Develop

### Setup

1. Clone the remote git repo from [github.com/ryantoddgarza/inaminitmusic](https://github.com/ryantoddgarza/inaminitmusic).
2. `cd` to the cloned local repo.
3. run `npm install` to install the dependencies.
4. run `npm run develop` to start the development server.

### Import alias module resolution

Directories in _src_ are aliased to `@[dirname]` in each of the following files.

- _.babelrc.json_ (Babel)
- _.eslintrc.js_ (ESLint)
- _gatsby-node.js_ (webpack)
- _tsconfig.json_ (TypeScript)

New directories should be aliased in all of the aforementioned files. New tooling (such as Jest) may require additional resolvers. [This post](https://raulmelo.dev/blog/module-resolution-or-import-alias-the-final-guide) is a good resource for how to do so.
