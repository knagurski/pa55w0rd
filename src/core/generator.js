const random = arr => arr[Math.floor(Math.random() * arr.length)];
const range = (from, to) => [...new Array(to + 1).keys()].slice(from);
const getRandomChar = (from, to) =>
  String.fromCharCode(random(range(from, to)));

const generators = {
  upper: () => getRandomChar(65, 90),
  lower: () => getRandomChar(97, 122),
  symbol: (chars = `!@#$*_-`) => random([...chars]),
  number: () => random(range(0, 9))
};

export const generatePassword = config => {
  let password = "";
  const chosenGenerators = Object.entries(generators)
    .filter(([gen]) => config.generators.includes(gen))
    .map(([, fn]) => fn);

  while (password.length < config.length) {
    password += random(chosenGenerators)();
  }

  return password;
};
