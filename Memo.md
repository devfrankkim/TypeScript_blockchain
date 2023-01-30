- 런타임 이전에 에러를 빨리 캐치한다
- vs code는 TS 쓰는 걸 바로 캐치함. -> tsconfig.ts
- type instruction from lib.dom.d.ts

```js
[1, 2, 3, 4] + false;
```

### 1. Declaration files

### 2. JSDOC

- check JavaScript file without TypeScript code
- Protect JavaScript with @ts-check & comments
- JSDoc 주석을 사용하여 JavaScript 파일에 type 정보를 제공할 수 있다.

* @ts-check
  JavaScript 파일에서 오류를 활성화하려면
  @ts-check를 .js 파일의 첫 번째 줄에 추가하여 TypeScript가 오류를 발생시키도록 한다. TypeScript는 여러 오류를 제공할 수 있다.

* 이러한 오류를 무시하고 싶다면 // @ts-ignore 또는 // @ts-expect-error를 추가하여 특정 줄의 오류를 무시할 수 있다.
  https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html#ts-check

* JSDoc Reference
  JSDoc 주석을 사용하여 JavaScript 파일에 type 정보를 제공할 수 있다. (자바스크립트 파일에서 타입 정보를 제공할 수 있다.)
  https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html

```js
// https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#param-and-returns
 @param {string} p1 - A string param.
 @param {string=} p2 - An optional param (Google Closure syntax)
 @param {string} [p3] - Another optional param (JSDoc syntax).
 @param {string} [p4="test"] - An optional param with a default value
 @returns {string} This is the result

  function stringsStringStrings(p1, p2, p3, p4) {
  // 코드...
  }
```

### d.ts vs JSDoc

- d.ts you can use more JS features, maybe polymorpishm and generics.

### npm i -D ts-node

- 빌드없이 타입스크립트를 실행할 수 있다.
- production (X) & Development (O)
- ts-node가 컴파일할 필요없이 타입스크립트 코드를 대신 실행시켜준다.
- ts-node는 Node.js용 TypeScript 실행 엔진 및 REPL. JIT는 TypeScript를 JavaScript로 변환하므로 사전 컴파일 없이 Node.js에서 TypeScript를 직접 실행할 수 있다. https://www.npmjs.com/package/ts-node

### npm i nodemon

- 자동으로 커맨드를 재실행시켜준다. auto refresh. 서버 kill할 필요없다.
- https://www.npmjs.com/package/nodemon

### esModuleInterop

- CommonJS 모듈을 ES6 모듈 코드베이스로 가져오려고 할 때 발생하는 문제를 해결한다. ES6 모듈 사양을 준수하여 CommonJS 모듈을 정상적으로 가져올 수 있게 해준다.https://www.typescriptlang.org/tsconfig/#esModuleInterop

### DefinitelyTyped - npm i -D @types/node

### ETC

- static methods can be called without having an instance.

```js
// If we have `static hello(){} inside of Block class` -> We can do ``
Block.hello();
```

```js
// If we have `public hello() inside of Block class`
block = new Block();
block.hello();
```
