const fs = require('fs');
const chalk = require('chalk');


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
};

const listNotes = () => {
    console.log(chalk.green.bgBlue.bold('Your notes:'));
    const notes = loadNotes();

    notes.forEach((note, i) => {
        console.log(`${i + 1}. ${note.title}`)
    });

};

const readNote = (title) => {
    const notes = loadNotes();
    const noteToRead = notes.find(note => note.title === title);

    if (noteToRead) {
        console.log(chalk.blue.inverse.bold(`Reading '${noteToRead.title}'`));
        console.log(noteToRead.body)
    } else {
        console.log(chalk.bgRed.bold(`Note '${title}' not found`));
    }
};

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter(note => note.title == title);
    const duplicateNote = notes.find(note => note.title === title);

    if (!duplicateNote) { // duplicateNotes.length === 0
        notes.push({
            title: title,
            body: body
        });
        console.log(chalk.green.bgBlue.bold(`Adding note '${title}'`));
        saveNotes(notes);
    } else {
        console.log(chalk.bgRed.bold(`Note '${title}' already exists`));
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesWithNoteRemoved = notes.filter(note => note.title !== title);
    if (notes.length === notesWithNoteRemoved.length) {
        console.log(chalk.bgRed.bold(`Note '${title}' not found'`));
    } else {
        console.log(chalk.black.bgGreen.bold(`Removing '${title}'`));
    }
    saveNotes(notesWithNoteRemoved);
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};