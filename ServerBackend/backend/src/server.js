import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
app.use(express.json());
const client = new MongoClient('mongodb://127.0.0.1:27017')
app.get('/hello/:name', (req,res) => {
    const { name } = req.params;
    res.send(`Hello ${name}!!!@@`)
})
app.get('/movies', async (req, res) => {

    await client.connect();
    const db = client.db('movieDB');
    const movieData = await db.collection('movies').find({}).toArray();

    res.json(movieData);
})

app.post('/addMovies', async (req, res) => {
    await client.connect();
    const db = client.db('movieDB');
    const insertOp = await db.collection('movies').insertOne({
        "name": req.body.name,
        "releaseDate": req.body.releaseDate,
        "actors": req.body.actors,
        "rating": req.body.rating,
        "moviePosterSrc": req.body.moviePosterSrc
    });
    console.log(insertOp);
    res.send(req.body);
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000 yay')
});