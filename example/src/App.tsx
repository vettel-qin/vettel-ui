import React from 'react';
import { hot } from 'react-hot-loader';
import { Button } from '../../src/index';

const App = () => {
  return (
    <section>
      <Button>default</Button><br /><br />
      <Button btnType="link" href="http://">link</Button><br /><br />
      <Button btnType="primary" disabled>primary</Button>
    </section>
  )
}

export default hot(module)(App);
