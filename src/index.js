const THECOOKIEJAR_SDK_V1_URL = 'https://cdn.cookieconsentjar.com/dist/v1/index.bundle.js';
const THECCOOKIEJAR_API_URL = 'https://api.cookieconsentjar.com';

async function handleRequest(request) {
    try {

        const url = new URL(request.url);
        let targetURL;

        if (url.pathname.startsWith('/dist/v1/')) {
            targetURL = THECOOKIEJAR_SDK_V1_URL;
        } else {
            targetURL = `${THECCOOKIEJAR_API_URL}${url.pathname}${url.search}`;
        }
        let modifiedRequest = new Request(targetURL, request);
        
        let response = await fetch(modifiedRequest);
        
        // Clone the response to modify headers for CORS
        let modifiedResponse = new Response(response.body, response);
        // Set CORS headers
        modifiedResponse.headers.set("Access-Control-Allow-Origin", "*");
        modifiedResponse.headers.set("Access-Control-Allow-Methods", "GET");
        modifiedResponse.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")

        return modifiedResponse;
        
    } catch (error) {
        console.error('Error processing request:', error.message);
        return new Response(`Internal Server Error: ${error.message}`, { status: 500 });
    }
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });