// src/app/page.tsx
import { getRandomResponse } from './utils/randomResponse';

const HomePage: React.FC = async () => {
  const randomResponse = getRandomResponse();
  
  return (
    <div>
      <h1>{randomResponse}</h1>
    </div>
  );
};

export default HomePage;
