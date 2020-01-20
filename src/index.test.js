import { describe } from 'riteway';

import './components/button/button-component.test.js';

describe('My test', async assert => {
  assert({
    given: "runs",
    should: "run",
    actual: true,
    expected: true,
  });
})