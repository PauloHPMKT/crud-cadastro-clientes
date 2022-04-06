const mongoose = require('mongoose')

function connect() {
    //connection to database
    mongoose.connect(`mongodb://localhost:27017/projeto-teste?readPreference=primary&directConnection=true&ssl=false`)
    
    const db = mongoose.connection
    
    db.once('open', () => {
        console.log('connected to database')
    })
    
    //connection failed
    db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
    connect
}