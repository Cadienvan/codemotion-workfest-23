const { getUsers, getUsersWithAsyncBatching } = require('./lib');

const fastify = require('fastify')({
  logger: false,
});

fastify.get('/users', async (request, reply) => {
  const users = await getUsers(request.query.name);
  return users;
});

fastify.get('/users-with-async-batching', async (request, reply) => {
  const users = await getUsersWithAsyncBatching(request.query.name);
  return users;
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();