import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [randomResponse, setRandomResponse] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randoresponse.matthew-4b1.workers.dev/');
        if (response.ok) {
          const data = await response.text();
          setRandomResponse(data);
        } else {
          console.error('Failed to fetch random response:', response.status);
        }
      } catch (error) {
        console.error('Error fetching random response:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Random Response:</h1>
      <p>{randomResponse}</p>
    </div>
  );
};

export default HomePage;
