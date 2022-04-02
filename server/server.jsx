import express from 'express';
import React from 'react';
import compression from 'compression';
import { renderToString } from 'react-dom/server';
import { readFileSync } from 'fs';

import { App } from '../client/App';

const app = new express();
const port = 9001;

app.use(compression());
app.use(express.static("dist"));

app.get("/", async ( _req, res )=>{
    const rendered = renderToString(<App/>);
    const index = readFileSync(`public/index.html`, `utf8`);

    res.send(index.replace("{{rendered}}", rendered));
});

app.listen(port);
console.info(`App listening on port ${port}`);