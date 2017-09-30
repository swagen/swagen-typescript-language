# swagen-typescript-language
swagen-typescript-language are Typescript language helpers for Swagen generators that generate Typescript code.

## Installation
In your swagen generator package:

```sh
npm install --save swagen-typescript-language
```

## Usage
swagen-typescript-language provides several helper functions. You can view the [API reference](docs/API.md) for more details.

```ts
const ts = require('swagen-typescript-language');

const headers = ts.buildHeader(profile, definition);
const methodSignature = ts.getMethodSignature('myOperation', operation, {
    voidType: 'any',
    returnTypeTransformer: returnType => `Observable<${returnType}>`
});
```
