import fs from 'fs/promises';

export async function handleFile(fileName = "datum.txt",writer = console.log) {
    let content = ""
    try {
        await fs.writeFile(fileName, new Date().toLocaleString());
        content = await fs.readFile(fileName, {encoding: "utf-8"});    
        await fs.unlink(fileName);
    }
    catch{
        content = "ERROR!"
    }
    writer(content);
}

// await handleFile();