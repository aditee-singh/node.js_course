const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')

const getNotes = () => 'Your notes are...'

const addNote = (title,body) => {
    const notes = loadNote()
    //const duplicateNotes = notes.filter((note)=> note.title === title)
    const duplicateNote = notes.find((note)=> note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNote(notes)
        console.log(chalk.bgGreen('New note added'))
    } else {
        console.log(chalk.bgRed('Note title taken'))
    }
    
}

const removeNote = (title) => {
    const notes = loadNote()
    const newNotes = notes.filter((note)=> note.title !== title)
    if(notes.length > newNotes.length){
        saveNote(newNotes)
        console.log(chalk.bgGreen('Note removed'))
    } else {
        console.log(chalk.bgRed('No note found'))
    }
}

const saveNote = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json' , dataJSON)
}


const loadNote = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
    
}

const listNotes = () => {
    const notes = loadNote()
    console.log(chalk.bgBlue('Your notes'))
    notes.forEach((note) => {
        console.log(note.title)
    });
    
}

const readNote = (title) => {
    const notes = loadNote()
    const note = notes.find((note)=>note.title === title)
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.bgRed('no note found'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}