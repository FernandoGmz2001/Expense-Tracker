export async function POST(req: Request) {
    const { username, password } = await req.json();
    return new Response(JSON.stringify({ message: { username, password } }), {
        headers: { 'content-type': 'application/json' },
    });
}