import express from 'express';

const app = express();
const port = 80;

app.get('/', (_, res) => res.send({
    'Container Environment Variables': process.env
}));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log(`Environment variables: ${JSON.stringify(process.env, null, 4)}`);
});