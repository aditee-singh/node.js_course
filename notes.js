const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')

const getNotes = function(){
    return 'Your notes are...'
}

const addNote = function (title,body) {
    const notes = loadNote()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
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

const removeNote = function (title) {
    const notes = loadNote()
    const newNotes = notes.filter(function(note){
        return note.title !== title
    })
    if(notes.length > newNotes.length){
        saveNote(newNotes)
        console.log(chalk.bgGreen('Note removed'))
    } else {
        console.log(chalk.bgRed('No note found'))
    }
}

const saveNote = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json' , dataJSON)
}


const loadNote = function() {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
    
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}