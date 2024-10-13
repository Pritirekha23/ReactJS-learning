# variable
```

import React from 'react';

// Create a new component
const MyComponent = () => {
  const name="Queen of tears";
  const ratings="9";
  const summary=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse suscipit doloribus cum, rem in numquam minima molestiae voluptatem mollitia. Quisquam provident expedita voluptatibus qui earum rem illum minus, ut iusto?"


  return (
    <div>
      <p>Netflix series</p>
      <ul>
        <li>Name: {name} </li>
        <li>ratings: {ratings}</li>
        <li>{summary}</li>
      
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

```
# expression

```
 <li>ratings: {5+4}</li>
```

# function calls