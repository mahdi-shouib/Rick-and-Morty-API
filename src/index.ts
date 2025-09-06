import express from 'express';
import fs from 'fs/promises';

const app = express();
const port = 5000;

app.get('/api/character/:id', async (req, res) => {
    const c = JSON.parse(await fs.readFile('src/characters.json', 'utf-8'));
    const id = parseInt(req.params.id);
    let found = false;

    c.result.forEach((character: any, index: number) => {
        if (id === character.id) {
            res.json(c.result[index]);
            found = true;
            return;
        }
    });

    if (!found) res.status(404).send('Character not found!');
});

app.get('/api/character', async (req, res) => {
    const c = JSON.parse(await fs.readFile('src/characters.json', 'utf-8'));
    res.json(c);
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});