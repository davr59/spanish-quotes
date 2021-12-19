import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const quotes = require('../data/quotes.json');
const seedrandom = require('seedrandom');

const buildRandomNumber = (maxLimit, seed = '') => {
  let random;
  if (seed) {
    const generator = seedrandom(seed);
    random = generator();
  } else {
    random = Math.random();
  }
  return Math.floor(random * maxLimit);
};

const buildSeed = () => {
  const today = new Date();
  const date = today.getUTCDate().toString();
  const month = (today.getUTCMonth() + 1).toString();
  const year = today.getUTCFullYear().toString();
  return date + month + year;
};

const getRandomQuote = () => {
  const randomNumber = buildRandomNumber(quotes.length);
  return quotes[randomNumber];
};

const getQuotesCount = () => {
  return quotes.length;
};

const getDailyQuote = () => {
  const randomNumber = buildRandomNumber(quotes.length, buildSeed());
  return quotes[randomNumber];
};

export { getDailyQuote, getQuotesCount, getRandomQuote };
