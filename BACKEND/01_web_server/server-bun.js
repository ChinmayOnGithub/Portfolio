import { serve } from 'bun'

serve({
    fetch(request) {
        const url = new URL(request.url);
        if (url.pathname === "/") {
            return new Response('Hello its ice tea again', { status: 200 });
        } else if (url.pathname === "/ice") {
            return new Response('ice is really cold', { status: 200 });
        } else {
            return new Response('Hell no 404: not found!', { status: 404 });
        }
    },
    port: 3000,
    hostname: '127.0.0.1'
});