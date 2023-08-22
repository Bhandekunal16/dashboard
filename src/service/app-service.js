

// Function to make a GET request to the API
export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`https://robotec-dashboard-ajcy9ylf5-bhandekunal16.vercel.app/youtube/getCount1`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};