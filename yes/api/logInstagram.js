// api/logInstagram.js
import { promises as fs } from 'fs';
import path from 'path';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { instagram } = req.body;

        // Path to the JSON file in the repository
        const filePath = path.join(process.cwd(), 'api', 'log.json');

        // Read the existing log data
        const fileContents = await fs.readFile(filePath, 'utf8');
        const logs = JSON.parse(fileContents);

        // Add new log entry
        logs.push({ instagram });

        // Write updated logs back to the file
        await fs.writeFile(filePath, JSON.stringify(logs, null, 2));

        res.status(200).json({ message: 'Logged successfully' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
