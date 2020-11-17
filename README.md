# react-simple-snake
[![GitHub](https://img.shields.io/github/license/MaelDrapier/react-simple-snake)](https://github.com/MaelDrapier/react-simple-snake/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/react-simple-snake?color=blue)](https://www.npmjs.com/package/react-simple-snake)
[![npm peer dependency version](https://img.shields.io/npm/dependency-version/react-simple-snake/peer/react?color=cyan)](https://www.npmjs.com/package/react)

A simple snake game created with the [React](https://reactjs.org) framework.

- [Demo](#demo)
- [Installation](#installation)
  - [To add it to your React app](#to-add-it-to-your-react-app)
  - [To launch the development server](#to-launch-the-development-server)
- [Dependencies](#dependencies)
- [Usage](#usage)
  - [To import it in your component](#to-import-it-in-your-component)
  - [Props](#props)
- [High-Score](#high-score)

<br/>

## Demo
A demo is available [here](https://MaelDrapier.github.io/react-simple-snake).

<br/>

## Installation

### To add it to your react app
- `npm install react-simple-snake`

### To launch the development server

- `git clone https://github.com/MaelDrapier/react-simple-snake.git`
- `cd react-simple-snake`
- `npm install`
- `npm start`

<br/>

## Dependencies
This project needs [react](https://www.npmjs.com/package/react) to operate . Install it with:
- `npm install react`

<br/>

## Usage

### To import it in your component

``` javascript
import Snake from 'react-simple-snake'

export default function YourComponent() {
  return(
    <div>
      <Snake />
    </div>
  )
}

```

### Props
_All props are optional_

|Prop|Type|Default value|Description|
|:-:|:-:|:-:|:-|
|`width`|number|`window.innerWidth / 2.5`|The width of the game board, must be > 180|
|`startSnakeSize`|number|`6`|The starting size of the snake|
|`snakeColor`|string|_random_|The color of the snake|
|`appleColor`|string|_random_|The color of apples|

<br/>

## High-Score
The highest score is saved locally in the browser's _local storage_, in a `snakeHighScore` field.
