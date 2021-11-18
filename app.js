const fs = require('fs');
// const utils = require('./utils'); // relative link
const notes = require('./notes');
const yargs = require('yargs');
    yargs.version('1.1.0');
// const validator = require('validator');

yargs.command({
    command: 'add',
    describe: 'Add a new notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // make it required
            type: 'string' // it has to be a string
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // a callback function
        notes.addNote(argv.title, argv.body)
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// list
yargs.command({
    command: 'list',
    describe: 'See a list of your notes',
    handler() {
        notes.listNotes();
    }
})

// read
yargs.command({
    command: 'read',
    describe: 'Read a note by entering its title',
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// console.log(yargs.argv) // path to node executable, this path file, and any final provided variables
yargs.parse()