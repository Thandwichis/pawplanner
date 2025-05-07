import axios from 'axios';

const API_KEY = process.env.REACT_APP_PETFINDER_API_KEY;
const API_SECRET = process.env.REACT_APP_PETFINDER_API_SECRET;
let token = null;

const getToken = async () => {
  if (!token) {
    const res = await axios.post('https://api.petfinder.com/v2/oauth2/token', {
      grant_type: 'client_credentials',
      client_id: API_KEY,
      client_secret: API_SECRET,
    });
    token = res.data.access_token;
  }
  return token;
};

export const fetchPetFriendlyLocations = async (location) => {
  const authToken = await getToken();
  const res = await axios.get('https://api.petfinder.com/v2/organizations', {
    headers: { Authorization: `Bearer ${authToken}` },
    params: { location, limit: 5 },
  });
  return {
    locations: res.data.organizations.map(org => ({
      name: org.name,
      type: org.type || 'Pet-friendly Place',
      features: ['shaded', 'water'],
      rating: (Math.random() * 5).toFixed(1),
    })),
  };
};
