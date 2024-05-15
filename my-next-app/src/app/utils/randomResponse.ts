
// src/app/utils/randomResponse.ts
export function getRandomResponse(): string {
  const responses = [
    "Welcome to our website!",
    "Hello, visitor!",
    "Thanks for stopping by!",
    "Hope you have a great day!",
    "Enjoy your stay!",
  ];
  let randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}
