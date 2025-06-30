import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  console.log("GET parameters:", url.searchParams);
  // console.log("GET request body:", await request.json());
  // console.log("GET request headers:", request.headers);
  const response = await fetch("https://swapi.info/api/planets");
  const data = await response.json();
  return new Response(JSON.stringify(data));
}