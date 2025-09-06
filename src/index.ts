import express from 'express';
import fs from 'fs/promises';

const app = express();
const port = 5000;

app.get('/api/character/:id', async (req, res) => {
    const c = JSON.parse(await fs.readFile('src/characters.json', 'utf-8'));
    const id = parseInt(req.params.id);

    c.result.forEach((character: any, index: number) => {
        if (id === character.id) {
            res.json(c.result[index]);
            return;
        }
    });

    res.json(c);
});

app.get('/api/character', async (req, res) => {
    const c = JSON.parse(await fs.readFile('src/characters.json', 'utf-8'));
    res.json(c);
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});