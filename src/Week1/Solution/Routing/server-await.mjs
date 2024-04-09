import http from 'http';
import fs from 'fs/promises';
import * as url from 'url';

import { handleNumbers } from './number.mjs'
import { handleFile } from './file_v2.mjs'
import querystring from "querystring";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

async function sendFile(res, fileName, contentType) {
    const data = await fs.readFile(__dirname + fileName);
    res.writeHeader(200, {"Content-Type": contentType});
    res.write(data);
    res.end();
}

http.createServer(async function (req, res) {
    if (req.url.startsWith("/numbers")) {
        let queryObject = querystring.parse(req.url.split("?")[1])
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        handleNumbers(Number(queryObject["min"]), Number(queryObject["max"]), (x) => res.write(x + "\n"));
        res.end();
    }
    else if (req.url === "/file") {
        await handleFile("datum.txt", data => res.end(data));
    }
    else if (req.url === "/to-send-html.html") {
        await sendFile(res, "to-send-html.html", "text/html");
    }
    else if (req.url === "/to-send-js.js") {
        await sendFile(res, "to-send-js.js", "text/javascript");
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('You requested ' + req.url);
    }
}).listen(3002);

console.log('Server running at http://localhost:3002/');
