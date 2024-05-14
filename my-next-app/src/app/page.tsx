import React, { useState, useEffect } from 'react';

const Home = () => {
  const [randomResponse, setRandomResponse] = useState('');

  useEffect(() => {
    // Fetch random response from Cloudflare Worker
    fetch('https://randoresponse.matthew-4b1.workers.dev/')
      .then(response => response.text())
      .then(data => setRandomResponse(data))
      .catch(error => console.error('Error fetching random response:', error));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center">
        <h1 className="text-3xl font-bold">{randomResponse}</h1>
      </div>
    </main>
  );
};

export default Home;
