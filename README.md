# react-horizontal-scroll-display

> Horizontal scroll component for javascript

[![NPM](https://img.shields.io/npm/v/react-horizontal-scroll-display.svg)](https://www.npmjs.com/package/react-horizontal-scroll-display) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

DO NOT USE: IN CONSTRUCTION

## Install

```bash
npm install --save react-horizontal-scroll-display
```

## Usage

```jsx
//
// \CLASS COMPONENT
//
import React, { Component } from 'react'

import HorizontalScroll from 'react-horizontal-scroll-display'
import 'react-horizontal-scroll-display/dist/index.css'

class Example extends Component {
  render() {
    return <HorizontalScroll />
  }
}

//
// \FUNCTIONAL COMPONENT
//
import React from 'react'

import HorizontalScroll from 'react-horizontal-scroll-display'
import 'react-horizontal-scroll-display/dist/index.css'

const Example = () => {
   return <HorizontalScroll />
}

```

### Attributes

| Attribute | Default | Type | Description |
| ----- | ----- | ----- | ----- |
| items | [] | `Array` | List of react components to be rendered |


## License

MIT © [desduvauchelle](https://github.com/desduvauchelle)

## Notes to self

Create an NPM package:
https://www.freecodecamp.org/news/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78/

How to create react package
https://www.youtube.com/watch?v=N8d-CLmg3hw&ab_channel=LevelUpTuts
