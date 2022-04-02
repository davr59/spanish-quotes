import { createRequire } from 'module';
import seedrandom from 'seedrandom';

const require = createRequire(import.meta.url);
const quotes = require('../data/quotes.json');

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
  let seedYear = year;
  let seedMonth = month;
  let seedDate = date;
  if (!year || !(month || month === 0) || !date) {
    const today = new Date();
    seedYear = today.getUTCFullYear().toString();
    seedMonth = today.getUTCMonth().toString();
    seedDate = today.getUTCDate().toString();
  }
  return seedYear + seedMonth + seedDate;
};

const getDailyQuote = (year = undefined, month = undefined, date = undefined) => {
  const randomNumber = buildRandomNumber(quotes.length, buildSeed(year, month, date));
  return quotes[randomNumber];
};

const getRandomQuote = () => {
  const randomNumber = buildRandomNumber(quotes.length);
  return quotes[randomNumber];
};

const getAllQuotes = () => quotes;

export { getDailyQuote, getRandomQuote, getAllQuotes };
