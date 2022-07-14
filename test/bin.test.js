import { expect } from 'chai';
import { describe, it } from 'mocha';
// TODO
// eslint-disable-next-line import/extensions
import * as globalQuote from '../bin/index.js';

describe('global quote library', () => {
  it('should return a valid random quote', () => {
    expect(globalQuote).to.be.a('module');
  });
});
