#!/usr/bin/env node

import { EOL } from 'os';
// eslint-disable-next-line import/extensions
import { getRandomQuote } from '../lib/quote.js';

const randomQuote = getRandomQuote();
let text = randomQuote.quote;
if (randomQuote.from) {
  text += `${EOL} -- ${randomQuote.from}`;
}
// eslint-disable-next-line no-console
console.log(text);
