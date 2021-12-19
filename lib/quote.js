import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const quotes = require('../data/quotes.json');
const seedrandom = require('seedrandom');

const buildRandomNumber = (maxLimit, seed = undefined) => {
  let random;
  if (seed) {
    const generator = seedrandom(seed);
    random = generator();
  } else {
    random = Math.random();
  }
  return Math.floor(random * maxLimit);
};

const buildSeed = (year = undefined, month = undefined, date = undefined) => {
  if (!year || !(month || month === 0) || !date) {
    const today = new Date();
    year = today.getUTCFullYear().toString();
    month = today.getUTCMonth().toString();
    date = today.getUTCDate().toString();
  }
  return date + month + year;
};

const getRandomQuote = () => {
  const randomNumber = buildRandomNumber(quotes.length);
  return quotes[randomNumber];
};

const getQuotesCount = () => {
  return quotes.length;
};

const getDailyQuote = (year = undefined, month = undefined, date = undefined) => {
  const randomNumber = buildRandomNumber(quotes.length, buildSeed(year, month, date));
  return quotes[randomNumber];
};

export { getDailyQuote, getQuotesCount, getRandomQuote };
