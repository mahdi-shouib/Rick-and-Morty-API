import express from 'express';
import fs from 'fs/promises';

const app = express();
const port = 5000;

app.get('/api/character', async (req, res) => {
    const c = await fs.readFile('src/characters.json', 'utf-8');
    res.json(JSON.parse(c));
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});