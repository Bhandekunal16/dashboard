// Function to make a GET request to the API
export const fetchData = async () => {
  try {
    const response = await fetch(
      `https://robotec-dashboard-k3moev00e-bhandekunal16.vercel.app/youtube/getCount1`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchData2 = async () => {
  try {
    const response = await fetch(
      `https://robotec-dashboard-k3moev00e-bhandekunal16.vercel.app/project/getCount`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchData3 = async () => {
  try {
    const response = await fetch(
      `https://robotec-dashboard-k3moev00e-bhandekunal16.vercel.app/insta/getFollower`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchYoutubeData = async () => {
  try {
    const response = await fetch(
      `https://robotec-dashboard-k3moev00e-bhandekunal16.vercel.app/youtube/getAllYoutube`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchProjectData = async () => {
  try {
    const response = await fetch(
      `https://robotec-dashboard-k3moev00e-bhandekunal16.vercel.app/project/getallproject`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
