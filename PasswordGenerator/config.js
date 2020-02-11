let config;
const configChangeListeners = [];

export const setConfig = newConfig => {
  config = { ...newConfig };
  configChangeListeners.forEach(fn => fn(config));
};

export const getConfig = () => config;

export const onConfigChange = fn => configChangeListeners.push(fn);
