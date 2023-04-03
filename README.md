<div align="center">
  <img src="https://github.com/crhistianramirez/react-hook-form-chakra/blob/main/images/logo.png?raw=true" alt="react-hook-form-chakra logo" />
</div>

![license-badge](https://img.shields.io/github/license/crhistianramirez/react-hook-form-chakra)

## Why?
Because setting up low level bindings is boring and tedious, and keeps you away from actually building solutions. This library takes care of most of the grunt work and doesn't try to  abstract away the underlying frameworks but rather embraces their composable architecture by leveraging [inversion of control](https://kentcdodds.com/blog/inversion-of-control#compound-components) and [composable components](https://kentcdodds.com/blog/inversion-of-control). 

## 🔥 Demo
[Demo on CodeSandbox](https://codesandbox.io/p/sandbox/react-hook-form-chakra-0yl36k?file=%2Fsrc%2FFormWithProvider.tsx&selection=%5B%7B%22endColumn%22%3A1%2C%22endLineNumber%22%3A58%2C%22startColumn%22%3A1%2C%22startLineNumber%22%3A57%7D%5D) includes a demo with form provider (simpler but less performant, see [section below](#form-provider)) as well as usage without FormProvider (requires extra parameter [control](https://react-hook-form.com/api/useform/control/))

## ⚙️ Installation

> Requires `react`, `react-hook-form`, and `@chakra-ui/react` as peer dependencies

```
npm install react-hook-form-chakra
```

or

```
yarn add react-hook-form-chakra
```

## 📝 Form Provider
React hook form can be configured to use [FormProvider](https://react-hook-form.com/api/formprovider/) which uses context to implicitly pass form data down to all children components. This approach simplifies development but it does have some [performance implications](https://react-hook-form.com/advanced-usage/#FormProviderPerformance) to be mindful of. 

When using FormProvider [control]((https://react-hook-form.com/api/useform/control/)) is not required on components, otherwise it is. Check out [our demo](#-demo) for usage examples.

## 📖 API Reference
Documentation for all component props can be found [here](https://crhistianramirez.github.io/react-hook-form-chakra/). 

## 📄 License
react-hook-form-chakra is an open-sourced software licensed under the [MIT license](https://github.com/crhistianramirez/react-hook-form-chakra/blob/main/LICENSE).

## 🤝 Contributing
Check out our [Contributing guide](https://github.com/crhistianramirez/react-hook-form-chakra/blob/main/CONTRIBUTING.md).

## 🙇 Credit
This library was adapted from another similar chakra binding library [made for Formik](https://github.com/thekaganugur/formik-chakra-ui)
