// src/app/page.tsx
import { getRandomResponse } from './utils/randomResponse';

let HomePage: React.FC = async () => {
  let randomResponse = getRandomResponse();
  
  return (
    <div>
      <h1>{randomResponse}</h1>
    </div>
  );
};

export default HomePage;
