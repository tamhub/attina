# Tamtina 🐟

### WARNING: 1.1.x is broken, please use 1.0.x

**This is just a fork of Attina that allows passing Mermaid config and uses divs instead of iframes for diagrams.**

Mermaid react renderer compatible with React 15.5+ based off [React Mermaid](https://github.com/jasonbellamy/react-mermaid)

Uses [Mermaid](https://mermaidjs.github.io/mermaidAPI.html) under the hood

## Setup

Install with:

```shell
$ yarn add tamtina
```

## Usage

```js
<Tamtina
  diagram={`
    graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;`}
/>
```

Will produce the following output:

![](img/output.png)

## Demo

You can modify this example on codesandbox:

[![Edit 7jqo862n7j](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/7jqo862n7j)
