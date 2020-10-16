const sortByDate = (items, desc = true) =>
  items.sort((a, b) => {
    if (a.date < b.date) {
      return desc ? 1 : -1;
    }
    if (a.date > b.date) {
      return desc ? -1 : 1;
    }
    return 0;
  });

export default sortByDate;
