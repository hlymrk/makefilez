# makefilez 

### simple way to make multiple file(s) with Node.js

**makefilez** provides an easy method for creating multiple files using Node.js.

## Installation

using npm

```
npm install makefilez

```

## Usage

### 1.

```js
const makefilez = require("makefilez");

// NOTE: Defaults to 'About.txt' after creation

makefilez(["fizz", "buzz"], "./public/pages/");
```

### 2.

```js
// NOTE: Now each file has a specified extension
makefilez(["fizz.js", "buzz.py"], "./public/pages/");
```

### 3.

```js
// NOTE: Now one file has a specified extension, and the rest default to a .py extension
makefilez(["fizz.js", "buzz"], "./public/pages/", { ext: ".py" });
```

### 4.

```js
// NOTE: Single file created and defaults to a .txt file extension
makefilez("fizz", "./public/pages/");
```

### 5.

```js
// NOTE: Single file created and has a .js file extension
makefilez("fizz.js", "./public/pages/");
```

### 6.

```js
// NOTE:
makefilez("fizz.js", "./public/pages/", { ext: ".py" });
```
