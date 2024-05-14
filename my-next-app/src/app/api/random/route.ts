import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Construct the response message with the random number
    const responseText = `Random Number: ${randomNumber}`;

    // Return a new Response object with the random response
    return new Response(responseText);
}

