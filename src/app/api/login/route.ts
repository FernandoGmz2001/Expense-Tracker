export async function POST(req: Request) {
    const { email, password } = await req.json();
    return new Response(JSON.stringify({ message: `Este es el email: ${email} y esta es la password ${password}` }), {
        headers: { 'content-type': 'application/json' },
    });
}
