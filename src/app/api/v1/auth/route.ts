export async function GET() {
  const data = {
    auth: true
  };

  return Response.json({ data });
}
