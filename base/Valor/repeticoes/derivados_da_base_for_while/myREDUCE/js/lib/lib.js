export const reduceJS = (data, init) => {
  try {
    let accumulator = init;

    for (let i = 0; i < data.length; i++) {
      accumulator += data[i];
    }
    return accumulator;
  } catch (e) {
    throw e;
  }
};
