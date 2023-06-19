# makefile-s

### Another simple way to make multiple file(s) with nodejs


## Usage
### 1.
```js
const makefile_s =require("makefile-s")



// NOTE: About defaults to About.txt after creation

makefile_s(["fizz","buzz"],"./public/pages/")
```

### 2.

```js
// NOTE: Now each file has a specified extension
makefile_s(["fizz.js","buzz.py"],"./public/pages/")
```

### 3.

```js
// NOTE: Now one file has a specified extension and the rest default to a .py  extension
makefile_s(["fizz.js","buzz"],"./public/pages/",{ext:".py"})
```

### 4.

```js
// NOTE: Single file created and defaults to a .txt file extension
makefile_s("fizz","./public/pages/")
```
### 5.

```js
// NOTE: Single file created and has a .js file extension
makefile_s("fizz.js","./public/pages/")
```
### 6.

```js
// NOTE:
makefile_s("fizz.js","./public/pages/",{ext:".py"})
```# makefile-s
