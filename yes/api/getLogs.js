// api/getLogs.js
import { promises as fs } from 'fs';
import path from 'path';

export default async (req, res) => {
    const filePath = path.join(process.cwd(), 'api', 'log.json');
    const fileContents = await fs.readFile(filePath, 'utf8');

    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(fileContents);
};
