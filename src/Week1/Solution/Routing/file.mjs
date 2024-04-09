import fs from 'fs';

export function handleFile(fileName = "datum.txt", writer = console.log) {
    fs.writeFile(fileName, new Date().toLocaleString(),  () => {
        fs.readFile(fileName, {encoding: "utf-8"}, (err, content) => {
            fs.unlink(fileName, () =>{
                writer(content);
            })
        });
    });
}

// handleFile();