// src/app/page.tsx
import { GetServerSideProps } from 'next';
import { getRandomResponse } from './utils/randomResponse';

interface HomePageProps {
  randomResponse: string;
}

const HomePage: React.FC<HomePageProps> = ({ randomResponse }) => {
  return (
    <div>
      <h1>{randomResponse}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const randomResponse = getRandomResponse();
  return {
    props: {
      randomResponse,
    },
  };
};

export default HomePage;
