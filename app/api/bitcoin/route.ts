export async function GET() {
  const response = await fetch(
    "https://mempool.space/api/v1/difficulty-adjustment"
  );

  const data = await response.json();

  return Response.json(data);
}