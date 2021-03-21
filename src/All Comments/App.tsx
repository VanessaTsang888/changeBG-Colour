import React, { useState } from 'react';
import './App.css';

// App function called by ./index.tsx
function App() {
  // Below is two pieces of state to bind the value change of an input (enter by user) 
  // .. and also bind the background color style defined in the header element.

  // The color state is a variable (ourColor) monitored by React. When it changes, it will get rendered to the UI.
  // The elements affected by this, which will be the style of the Header Element ( <header> )
  // The data inside the variable gets stored in the useState (this is part of the React library) which is a Component state.
  const [ourColor, setOurColor] = useState<string>('#ce1126');

  // The input box state is a variable (ourInputValue) monitored by React. When it changes, it will rerender to the UI. 
  // The elements affected by this will be the value of the Input Element ( <input> ).
  // As the user types in more keystrokes, this get updates via the setOurInputValue variable.  The input value variable (ourInputValue) stores
  // what the user has typed into the input box. 
  // The data inside the ourInputValue variable gets stored in the useState which is a Component state.
  // useState = React Hook. 2 variables persists at render. setOurInputValue = function that update the value. Every time I call useState fn will
  // return an array of 2 variables.
  // The input box will have what ever I pass into useState, this example is empty string.
  const [ourInputValue, setOurInputValue] = useState<string>('');

  // The return() statement is used to display or render the content to the UI. In the below example, h2, input box and btn gets displayed to the UI.
  // When the user enters the hex color code, React will update its Virtual DOM as that is the component has changed not the whole physical DOM.
  // Above is the rendering part of the Lifecycle of React: https://www.youtube.com/watch?v=Zz9pLellSQA
  return (
    <div className="App">
      {/* A demonstration of inline styles. This is not Best Practice, but it's useful for this basic example app. */}
      <header className="App-header" style={{backgroundColor: ourColor}}>

        {/*  Our H2 Element that has our data-testid demonstrated. This is used by the App.spec.tsx file and is checking to see if the h2 on
        the UI is the same as the h2 on my test file: App.spec.tsx
        To run the test, use command: npm test */}
       <h2 data-testid="Title">Use Input Box to change background colour</h2>

        {/* An input box for user to type their hex colour code to change the background colour. The keystrokes are being stored in the Component state
        via the setOurInputValue variable  */} 
        <input type="text" value={ourInputValue} onChange={(event) => {setOurInputValue(event.target.value)}} />

        {/* When user inputs their keystrokes, the ourInputValue variable gets updated. when user clicks the btn then the final value gets stored in the
        ourInputValue variable in the Component state. Then the bg colour gets updated as React now knows that the bg style has changed. Setting the
        setOurColor to the same value as ourInputValue */}
        <button onClick={() => (setOurColor(ourInputValue))}> Change Background Colour! </button>

      </header>
    </div>
  );
}

export default App;
