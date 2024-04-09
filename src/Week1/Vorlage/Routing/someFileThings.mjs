import fs from 'fs';

export function fileShenanigans(filename, fileContent) {
    fileManagement(filename, fileContent);
}

function fileManagement(filename, fileContent) {
    createFile(filename, fileContent);
    readFile(filename);
    deleteFile(filename);
}

function createFile(filename, fileContent) {
    fs.appendFile(filename + '.txt', fileContent, function (err) {
        if (err) throw err;
        console.log(`File ${filename}.txt saved`);
    });
}

function readFile(filename) {
    fs.readFile(filename + '.txt', 'UTF8', function (err, data) {
        if (err) throw err;
        console.log(`Read file content of ${filename}.txt:`);
        console.log(data);
    });
}

function deleteFile(filename) {
    fs.unlink(filename + '.txt', function (err) {
        if (err) throw err;
        console.log(`File ${filename}.txt deleted`);
    })
}