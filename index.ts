const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      const body = "Welcome to new world!";
      return new Response(body);
    }

    if (url.pathname === "/api/bet") {
      const body = "Bet API";
      return new Response(body);
    }

    if (url.pathname === "/api/bet/create") {
      const body = "Create Bet";
      return new Response(body);
    }

    return new Response("404: Not Found");
  },
});

console.log(`Listening on http://localhost:${server.port}`);
