import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Send a JSON response with the random number
    res.status(200).json({ randomNumber });
}
