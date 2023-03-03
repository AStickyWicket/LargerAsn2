import express from 'express';
import { MongoClient } from 'mongodb';
import path from 'path';
import  { fileURLToPath } from 'url';
import multer from 'multer';


const upload = multer({dest: 'posters'});
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, '../posters')));

app.get(/^(?!\/api).+/, (req, res) => {
    res.redirect('/')
})

const client = new MongoClient('mongodb://127.0.0.1:27017')

app.get('/api/movies', async (req, res) => {

    await client.connect();
    const db = client.db('movieDB');
    const movieData = await db.collection('movies').find({}).toArray();

    res.json(movieData);
})

app.post('/api/addMovies', upload.single('moviePosterSrc'), async (req, res) => {
    await client.connect();
    const db = client.db('movieDB');
    const insertOp = await db.collection('movies').insertOne({
        "name": req.body.name,
        "releaseDate": req.body.releaseDate,
        "actors": req.body.actors,
        "rating": req.body.rating,
        "moviePosterSrc": req.file.filename
    });
    console.log(insertOp);
    res.redirect('/');
})

app.post('/api/deleteMovies', async (req, res) => {
    await client.connect();
    const db = client.db('movieDB');
    const deleteOp = await db.collection('movies').deleteOne({
        "name": req.body.name
    });
    console.log(deleteOp);
    res.send(req.body);
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT)
});