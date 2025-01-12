const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchBitcoinPrice = async () => {
  try {
    const response = await fetch(
      `${COINGECKO_BASE_URL}/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true`
    );
    const data = await response.json();
    return data.bitcoin;
  } catch (error) {
    console.error('Error fetching Bitcoin price:', error);
    throw error;
  }
};

export const fetchTrendingCoins = async () => {
  try {
    const response = await fetch(`${COINGECKO_BASE_URL}/search/trending`);
    const data = await response.json();
    return data.coins.slice(0, 3); // Get top 3 trending coins
  } catch (error) {
    console.error('Error fetching trending coins:', error);
    throw error;
  }
};
