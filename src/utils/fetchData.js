export const exerciseOptions = {
  method: "GET",

  headers: {
    "x-rapidapi-key": "dcf6613c5cmsh791bcd6cccb4c45p1fa7e3jsn767fea863e01",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
