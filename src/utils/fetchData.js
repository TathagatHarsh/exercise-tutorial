export const exerciseOptions = {
  method: "GET",

  headers: {
    "x-rapidapi-key": "dcf6613c5cmsh791bcd6cccb4c45p1fa7e3jsn767fea863e01",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
    return []; // fallback to avoid crashes
  }
};
