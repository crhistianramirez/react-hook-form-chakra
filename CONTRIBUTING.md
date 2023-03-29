Hello! Thanks for your interest in contributing! Before implementing new features and changes please create an issue so we can have a discussion about it!

## ✨ Submitting a pull request

1. Fork this repository
2. Create a new branch with the name of the feature you plan to work on
3. Install dependencies with npm install
4. Make your changes to src/components
5. Test your changes
    - You can run the frontend components by running `npm run dev`
    - Make sure you use your new or modified components in both demoWithProvider.tsx and demoWithoutProvider.tsx to ensure both use cases work properly
6. Push your changes to your fork's branch
7. Make a pull request to the main development branch

## 🚀 Releasing

Assuming you or a contributor followed the instructions for [making a pull request](#✨-submitting-a-pull-request) and are a maintainer you can follow these instructions to release a new version of the library.

1. Run `npm run build` which will build the project and generate the documentation
2. Update the [changelog](./CHANGELOG.md)
3. Bump the version in package.json. Make sure it adheres to [semantic versioning](https://semver.org/)
4. Create a release commit in the format: `:bookmark: v{newVersionHere}`
5. Push changes to deployed master branch.
6. Create and publish a new release on github
7. Run `npm publish`
8. Update the codesandbox
9. Have a beer! 🍻