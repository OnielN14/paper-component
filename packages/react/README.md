# Paper Component (React)

React component wrapper for [PaperCSS](https://github.com/papercss/papercss).

> The purpose of this project is to learn about building an npm package,
> monorepo, and npm workspace.
>
> Currently, the packages is not intented to be using on production.

## Installing Paper Component

To use Paper Component, you just need to install `@paper-component/react`
package

```sh
npm install @paper-component/react
#or
yarn add @paper-component/react
```

## Usage

To start using the components, please follow these steps:

1. Import `papercss` on your application root:

```jsx
import 'papercss';

function App() {
  ...
}
```

2. Then, you can start using components:

```jsx
import { Button } from "@paper-component/react"

function Example() {
  return <Button>Click Me!</Button>
}
```
