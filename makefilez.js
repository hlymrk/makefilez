/*
Copyright (c) 2023 Holy Mark

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

const fs = require("fs");
const path = require("path");

/**
 * **Main file creation function.**
 *
 * @param {string|Array<string>} file_s name or names of the files to be created
 * @param {string} dir path of the directory where the created files will be.
 * @param {{ext?:string,encodeTo?:string}} opt settings for the default file(s) extension.
 * @returns {void}
 */
function makefile_s(file_s, dir, opt = {}) {
  // let's make sure our variables are completely present.
  // file_s = typeof file_s === "string" || Array.isArray(file_s) ? file_s : "";
  //  dir = typeof dir === "string" ? dir : "";
  //  opt = typeof opt === "object" ? opt : {}; // Already present but, no issues though.

  // default settings configuration.
  let encodeTo = opt.encodeTo || "utf-8";
  let ext = opt.ext || ".txt";

  // creates the directory if it dose'nt exist and continues to file creation
  if (
    !!fs.existsSync(dir)
      ? path.join(__dirname, dir)
      : fs.mkdirSync(dir, { recursive: true })
  ) {
    // If the file_s argument is an array, loop through it and create the files.
    if (Array.isArray(file_s)) {
      for (let x = 0; x < file_s.length; ++x) {
        if (typeof file_s[x] === "string" && file_s[x].includes(".")) ext = "";

        try {
          fs.writeFileSync(dir + file_s[x] + ext, "", encodeTo);
        } catch (e) {
          console.log("An error occurred!");
          console.log(e);
        }
      }
    }
    // If it's just a filename string, create the single file
    else if (typeof file_s === "string") {
      if (typeof file_s === "string" && file_s.includes(".")) ext = "";
      try {
        fs.writeFileSync(dir + file_s + ext, "", encodeTo);
      } catch (e) {
        console.log("An error occurred!");
        console.log(e);
      }
    }
    // ???
    else {
      return;
    }
  }
}

module.exports = makefile_s;
