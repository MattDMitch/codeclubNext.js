import React, { useState, useEffect } from 'react';

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
  const [randomResponse, setRandomResponse] = useState('');

  useEffect(() => {
    setRandomResponse(getRandomResponse());
  }, []);

  const handleRefresh = () => {
    setRandomResponse(getRandomResponse());
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">{randomResponse}</h1>
      <button onClick={handleRefresh} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
        Refresh
      </button>
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
