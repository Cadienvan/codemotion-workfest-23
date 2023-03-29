const { promisify } = require('util');

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

let myUsersPromises = [];
async function getUsersWithAsyncBatching(name) {

  const promise = myUsersPromises.find(p => p.name === name);
  if (promise) {
    return promise.pr;
  }

  const newPromise = getUsers(name);
  myUsersPromises.push({
    name: name,
    pr: newPromise
  });

  newPromise.finally(() => {
    myUsersPromises = myUsersPromises.filter(p => p.name !== name);
  });

  return newPromise;
}

module.exports = { getUsers, getUsersWithAsyncBatching };