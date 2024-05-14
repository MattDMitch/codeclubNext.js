import { NextApiRequest, NextApiResponse } from 'next';

// Function to generate a random response
function generateRandomResponse() {
  const responses = [
    'Hello!',
    'How are you?',
    'Nice to meet you!',
    'What can I do for you?',
    'Have a great day!',
  ];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

export default function RandomResponsePage(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const randomResponse = generateRandomResponse();
    res.status(200).json({ message: randomResponse });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
