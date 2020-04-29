const generators = ["upper", "lower", "number"];

export const config = { length: 20, generators };

export const toggleGenerator = generator => {
  if (generators.includes(generator)) {
    generators.splice(generators.indexOf(generator), 1);
  } else {
    generators.push(generator);
  }
};

export const setLength = newLength => (config.length = newLength);
