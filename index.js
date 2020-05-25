const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()


app.use('/api/auth', require('./router/auth'))
app.listen(config.get('port'), () => console.log(`Start server..`))

async function start() {
    try {
        await mongoose.connect(config.get('mongoUrl'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    } catch(e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}
 
start()