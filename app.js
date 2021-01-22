const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes.js')
yargs.version('1.1.0')


yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title:{
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title , argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read thenote',
    handler: function() {
        console.log('Reading the note')
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing the notes',
    handler: function() {
        console.log('Listing the notes')
    }
})
yargs.parse()
