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

const RandomResponse = () => {
  const randomResponse = getRandomResponse();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">{randomResponse}</h1>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RandomResponse />
    </main>
  );
}
