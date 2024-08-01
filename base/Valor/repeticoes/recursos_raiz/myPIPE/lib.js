export const PIPEjs = (list, init) => {
  try {
    let data = init;
    for (let i = 0; i < list.length; i++) {
      data = list[i];
    }
    return data;
  } catch (e) {
    throw e;
  }
};
