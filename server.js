const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send('This is Node App')
})

app.listen(3000, () => {
    console.log('Listening at 3000')
})