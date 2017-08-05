const filterArray = (list, searchTerm) => {
  searchTerm = searchTerm.toLowerCase();
  return list.filter(item => {
    return (
      item.city.toLowerCase().search(searchTerm) !== -1 ||
      item.title.toLowerCase().search(searchTerm) !== -1
    );
  });
};

export { filterArray };
