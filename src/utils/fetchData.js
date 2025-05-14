export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key":
      process.env.REACT_APP_RAPID_API_KEY ||
      "dcf6613c5cmsh791bcd6cccb4c45p1fa7e3jsn767fea863e01",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `API Error (${response.status}): ${errorText || response.statusText}`
      );
    }

    const data = await response.json();

    if (!data) {
      throw new Error("No data received from the API");
    }

    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
    throw error; // Re-throw the error to be handled by the component
  }
};
