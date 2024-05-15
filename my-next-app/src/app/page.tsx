import { GetServerSideProps } from 'next';
import React from 'react';

interface HomePageProps {
  randomResponse: string;
}

const HomePage: React.FC<HomePageProps> = ({ randomResponse }) => {
  return (
    <div>
      <h1>Random Response:</h1>
      <p>{randomResponse}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  let randomResponse = '';

  try {
    const response = await fetch('https://randoresponse.matthew-4b1.workers.dev/');
    if (response.ok) {
      randomResponse = await response.text();
    } else {
      console.error('Failed to fetch random response:', response.status);
    }
  } catch (error) {
    console.error('Error fetching random response:', error);
  }

  return {
    props: {
      randomResponse,
    },
  };
};

export default HomePage;
