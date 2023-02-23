import React from "react";
import "../App.css";
const StateshookAndEvents = () => {
  return (
    <div className="materiabody">
      <br></br>
      <br></br>
      <h3 className="corletramateria">
        STATE HOOK: The useState hook is a built-in hook in the React library that allows functional components to manage state. It takes an initial state value as an argument and returns an array with two elements: the current state value and a function to update it.
        <p></p> Here's an example of how to use the useState hook:
      </h3>
      <img
        className="tamanhoImagem4"
        src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677184306/IronReact/8_j1uyya.png"
        alt="imagem4"
      />
      <h3 className="corletramateria">In this example, the useState hook is used to manage the state of a counter. The initial state value is 0, which is passed as an argument to useState. The count variable holds the current state value, and setCount is a function that can be called to update the state value.
      <p></p>The onClick event handler of the button calls setCount with a new value for the state, which triggers a re-render of the component with the updated state value.
      </h3>
      <h3 className="corletramateria">
        EVENTS: In React, events are similar to standard DOM events, but they are implemented in a slightly different way.
        <p></p>
        React event handlers are written as functions and attached to the event directly in JSX. Here's an example of how to handle a click event in React:
        <p></p>
      </h3>
      <img
        className="tamanhoImagem5"
        src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677184306/IronReact/9_vlxihw.png"
        alt="imagem5"
      ></img>
      <h3 className="corletramateria">
      In this example, the handleClick function is called when the button is clicked. The function simply logs a message to the console, but it could perform any action or update any state in the component.
      <p></p>
      The onClick attribute is a special attribute that React uses to attach the event handler function to the button. When the button is clicked, React will call the handleClick function.
      <p></p>
      Note that event handlers in React are written in camelCase, rather than lowercase. For example, the onclick attribute in HTML would be written as onClick in React. This is because React is based on JavaScript, which is a case-sensitive language, and it's a convention in JavaScript to use camelCase for function names.
      </h3>
    </div>
  );
};
export default StateshookAndEvents;