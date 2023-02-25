import React from "react";
import "../App.css";
const Routing = () => {
  return (
    <div className="materiabody">
      <br></br>
      <br></br>
      <h3 className="corletramateria">
        Hooks and lifecycle methods are important concepts in React that allow
        you to manage state and respond to changes in your components. Here's an
        overview of how they work: Hooks Hooks are functions that allow you to
        use React features like state and lifecycle methods in functional
        components, which were previously only available in class components.
        There are several built-in hooks in React, such as useState, useEffect,
        useContext, and useReducer. useState The useState hook allows you to
        manage state in functional components. It takes an initial value and
        returns an array with two values: the current state value and a function
        to update the state. Here's an example:
      </h3>

      <img
        className="tamanhoImagem12"
        src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677321927/IronReact/18_gwfwt1.png"
        alt="imagem12"
      ></img>
      <h3 className="corletramateria">
        In this example, we use the useState hook to define a count state
        variable with an initial value of 0. We also define a function
        handleClick that updates the state when the button is clicked. We pass
        handleClick as a prop to the button component, so that it is called when
        the button is clicked. useEffect The useEffect hook allows you to run
        side effects, such as fetching data from an API or updating the document
        title, in functional components. It takes a callback function and an
        optional array of dependencies as arguments. Here's an example:
      </h3>
      <img
        className="tamanhoImagem13"
        src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677321927/IronReact/18_gwfwt1.png"
        alt="imagem13"
      ></img>
      <h3 className="corletramateria">
        In this example, we use the useEffect hook to update the count state
        variable every second. We define a callback function that sets up a
        timer using setInterval and returns a cleanup function using
        clearInterval to remove the timer when the component is unmounted or the
        dependencies change. useContext The useContext hook allows you to access
        context values, which are shared between components in a tree hierarchy,
        in functional components. It takes a context object as an argument and
        returns the current context value. Here's an example:
      </h3>
      <img
        className="tamanhoImagem14"
        src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677321927/IronReact/18_gwfwt1.png"
        alt="imagem14"
      ></img>
      <h3 className="corletramateria">
        In this example, we use the useContext hook to access the current theme
        context value in a button component. We define the ThemeContext object
        using the createContext function and provide a default value. We also
        define a theme object with a background and foreground property, which
        we use to style the button. Lifecycle methods Lifecycle methods are
        methods that are called at various stages of a component's lifecycle,
        such as when it is mounted, updated, or unmounted. They are only
        available in class components, not in functional components.
        componentDidMount The componentDidMount method is called after a
        component is mounted and inserted into the DOM. It is often used to
        fetch data from an
      </h3>
    </div>
  );
};
export default Routing;
