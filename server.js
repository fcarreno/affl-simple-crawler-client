const express = require('express');
const db = require('./db');
const app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');

});


// Simple route handler (expecting resource type to match db table name...)
app.get('/api/resources/:resourceType', async (req, res, next) => {

    let resourceType = req.params.resourceType;
    let result;
    try{
        result  = await db.query(resourceType);
        res.json(result);

    }catch(err){
        res.json({error: 'Query Error...'});
        //next(err); potential additional/different error handling here..
    }

});


app.listen(8080, () => {
    console.log('SIMPLE CRAWLER CONTENT SERVER LISTENING ON PORT 8080...');
});