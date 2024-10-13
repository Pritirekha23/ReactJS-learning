
import React from 'react';

// Create a new component
const MyComponent = () => {
  return (
    <div>
      <p>Netflix series</p>
      <ul>
        <li>Demon slayer1</li>
        <li>Demon slayer2</li>
        <li>Demon slayer3</li>
        <li>Demon slayer4</li>
        <li>Demon slayer4</li>
      </ul>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <React.Fragment>
       {/* or <></>  or <Fragment></Fragment> */}
      <h1>Rendering MyComponent 4 Times</h1> 
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <MyComponent />
    </React.Fragment>
  );
};

export default App;
