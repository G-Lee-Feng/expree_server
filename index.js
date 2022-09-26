const express = require('express');

const app =  express();


app.get('/api/test', (req, res) => {
    res.send({
        name: 'xiaoming', 
        age: 12, 
        sex: 1
    })
})

app.listen(5500, () => {
    console.log('---------server is running on:', 'http://localhost:5500')
});