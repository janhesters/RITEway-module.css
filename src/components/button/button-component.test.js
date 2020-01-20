import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component.js';

import Button from './button-component.js';

describe("Button component", async assert => {
  const createButton = (props = {}) => render(<Button {...props} />);

  {
    const props = { children: <p className='foo'>Foo</p> };
    const $ = createButton(props);

    assert({
      given: "children",
      should: "render them",
      actual: $('.foo').text(),
      expected: "Foo",
    });
  }

  {
    const props = { className: 'bar' };
    const $ = createButton(props);

    assert({
      given: "a class name",
      should: "apply it",
      actual: $('.bar').length,
      expected: 1,
    });
  }
});