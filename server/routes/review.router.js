const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// GET activities
router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = 'SELECT * from "activity"';

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    let queryText = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);';
    let { feeling, under, support, comments } = req.body;
    pool.query(queryText, [feeling, under, support, comments])
        .then((result) => {
            res.sendStatus(200);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    console.log("In DELETE request");
    let queryText = 'DELETE FROM "activity" WHERE "id" = $1';

    pool.query(queryText, [req.params.id]).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

module.exports = router;