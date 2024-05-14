import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Log the random number to the console for debugging
    console.log('Generated Random Number:', randomNumber);

    // Construct the response message with the random number
    const responseText = `Random Number: ${randomNumber}`;

    // Create a new Response object with the random response
    const response = new Response(responseText);

    // Set cache control headers to prevent caching
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');

    // Return the Response object directly
    return new NextResponse(response);
}
