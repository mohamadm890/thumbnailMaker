

export async function GET() {
 
  const res = await fetch("https://api.paddle.com/products?include=prices", {
    headers: {
      Authorization: `Bearer ${process.env.PADDLE_API_KEY}`,
    },
  });

  const data = await res.json();

  return Response.json(data);

}
