import React from 'react';

// Function to generate a random response
const getRandomResponse = () => {
  const responses = [
    'Hello!',
    'Hi there!',
    'Welcome!',
    'Greetings!',
    'Hey!',
    'Hola!',
    'Bonjour!',
    'Ciao!',
  ];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
};

export default function Home() {
  const randomResponse = getRandomResponse();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center">
        <h1 className="text-3xl font-bold">{randomResponse}</h1>
      </div>
    </main>
  );
}
