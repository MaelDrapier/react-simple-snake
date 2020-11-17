# react-simple-snake

A simple snake game created with the [React](https://reactjs.org) framework.

- [Demo](#demo)
- [Installation](#installation)
  - [To launch the development server](#to-launch-the-development-server)
- [Dependencies](#dependencies)
- [Usage](#usage)
  - [To import it in your component](#to-import-it-in-your-component)
  - [Props](#props)
- [High-Score](#high-score)

## Demo
A demo is available [here](https://MaelDrapier.github.io/react-simple-snake).


## Installation

### To launch the development server

- `git clone https://github.com/MaelDrapier/react-simple-snake.git`
- `cd react-simple-snake`
- `npm install`
- `npm start`


## Dependencies
This project needs [react](https://www.npmjs.com/package/react) to operate . Install it with:
- `npm install react`


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


## High-Score
The highest score is saved locally in the browser's _local storage_, in a `snakeHighScore` field.
