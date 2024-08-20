import React from 'react';
import Carousel from './components/Carousel/Carousel';

const App = () => {
  return (
    <div className="App">
      <Carousel show={1}>
        <h2>Item 1</h2>
        <h2>Item 2</h2>
        <h2>Item 3</h2>
        <h2>Item 4</h2>
      </Carousel>
    </div>
  );
};

export default App;
