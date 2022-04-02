import { expect } from 'chai';
import { describe, it } from 'mocha';
// eslint-disable-next-line import/extensions
import { getAllQuotes, getDailyQuote, getRandomQuote } from '../lib/quote.js';

function expectQuote(quote) {
  expect(quote).to.be.a('object');
  expect(quote.quote).to.be.a('string');
  expect(quote.from).to.be.a('string');
}

describe('quote library', () => {
  it('should return a valid daily quote', () => {
    const today = new Date();
    let quote = getDailyQuote(today.getFullYear());
    expectQuote(quote);
    quote = getDailyQuote(today.getFullYear(), 0);
    expectQuote(quote);
    quote = getDailyQuote(today.getFullYear(), today.getMonth());
    expectQuote(quote);
    quote = getDailyQuote(today.getFullYear(), today.getMonth(), today.getDate());
    expectQuote(quote);
  });
  it('should return a valid random quote', () => {
    const quote = getRandomQuote();
    expectQuote(quote);
  });
  it('should return a valid array of quotes', () => {
    const quotes = getAllQuotes();
    expect(quotes).to.be.a('array');
    quotes.forEach((quote) => {
      expectQuote(quote);
    });
  });
});
