import dotenv from 'dotenv';
import { getJson } from 'serpapi';
dotenv.config();

import path from 'node:path';
import cors from 'cors';
import express from 'express';
const app = express();

const PORT = process.env.PORT || 3500;

app.get('/api', async(req, res) => {
    try {
        const response = await getJson({
            engine: "google_maps",
            q: "Coffee",
            ll: "@40.7455096,-74.0083012,14z",
            api_key: process.env.google_maps_api
        });

        res.statusCode = 200;
        return res.json(response.local_results);
    } catch (error) {
        res.statusCode = 500;
        return res.json({msg: 'Valami hiba: ' + error});
    }
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/api`);
});