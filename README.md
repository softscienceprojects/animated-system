# About
Following a tutorial to learn nodejs

# Notes
#### Importing
```
// import without ES6
const validator = require('validator');
// import with ES6
import validator from 'validator';
```

#### Printing files

```
fs.writeFileSync('notes.txt', 'this file was created by node.js'); 
// name of file, contents of file
fs.appendFileSync('notes.txt', '\n \n and some more text');
```

Command line
`global` and `process` - our scope (like in browser we have e.g. `window`)

#### Basic way of getting args from args from terminal:
```
console.log(process.argv) // path to node executable, this path file, and any final provided variables
```

```
const command = process.argv[2]
if (command === 'add') {
    console.log('adding')
} else if (command === 'remove') {
    console.log('removing note')
}
```


#### Debugging
Put the break point in your file with `debugger` as you normally would. However when you run your file, include `inspect`

So our notes app would be 
```node inspect app add --title="my title" --body="and a body"```

You'll then use Chrome browser to inspect this (easiest integration for debugging). Go to `chrome://inspect` in the browser and you'll see your file under 'remote target'. 