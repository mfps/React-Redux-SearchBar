const getData = url => {
  return fetch(url).then(response => response.json()).then(result => result);
};

export { getData };
