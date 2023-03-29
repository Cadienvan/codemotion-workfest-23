const { cacheCandidate } = require('@jointly/cache-candidate');
const { promisify } = require('util');
const { myLoggerCC } = require('./plugin');

const sleep = promisify(setTimeout);

async function getUsers(name) {
  await sleep(Math.random() * 300 + 4000);
  for (let i = 0; i < 100_000_000; i++) {
    Math.sqrt(i);
  }

  return [
    { id: 1, name: 'Luigi Lazzari' },
    { id: 2, name: 'Yuri Blanc' },
    { id: 3, name: `Vincenzo Marco ${name}` },
  ];
}

module.exports = { getUsers, getUsersWithAsyncBatching: cacheCandidate(getUsers, {
  plugins: [
    {
      name: myLoggerCC.name,
      hooks: myLoggerCC.hooks,
      additionalParameters: {
        foo: 'bar'
      }
    }
  ]
}) };