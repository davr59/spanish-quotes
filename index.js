import quotes from './data/quotes.json';

const buildRandomNumber = (maxLimit) => {
  return Math.floor(Math.random() * maxLimit);
};

const getRandomQuote = () => {
  const randomNumber = buildRandomNumber(quotes.length);
  return quotes[randomNumber];
};

export default { getRandomQuote };
