import React from "react";
import "../App.css";

const ListSubjects = () => {
  return (
   <div className="materiabody">
    <br></br>
    <h3 className="corletramateria">
    Functional Components:
Functional components are basically functions that return JSX (JavaScript XML) elements. They are simple and straightforward, and can take in props (short for "properties") as input and return a JSX element. Here is an example of a functional component that renders a greeting message:
    </h3>
    <img className="tamanhoImagem1"
    src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677181225/IronReact/5_rmsrpb.png"
    alt="imagem1"></img>
   
   <h3 className="corletramateria">
   In this example, the Greeting component takes in a name prop and returns a h1 element with the greeting message.

Class Components:
Class components are a bit more complex than functional components, but they offer more advanced features like state management and lifecycle methods. They are created using ES6 classes and extend the React.Component class. Here is an example of a class component that renders a counter:
   </h3>
   <img className="tamanhoImagem2"
    src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677182864/IronReact/6_sdvp3b.png"
  alt="imagem2"></img>
<h3 className="corletramateria">
In this example, the Counter component uses the constructor method to initialize its state with a count property set to 0. It also defines a handleClick method that updates the count state when the user clicks the "Increment" button. Finally, the render method returns a JSX element that displays the current count and a button to increment it.

In addition to functional and class components, React also provides a number of other built-in components like div, span, img, and input that you can use to build your UI. You can also create your own custom components by combining these building blocks in different ways to create more complex UI elements.
</h3>
<h3 className="corletramateria">

</h3>
<img className="tamanhoImagem3"
    src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677183436/IronReact/7_qhfvph.png"
  alt="imagem3"></img>
  <h3 className="corletramateria">
  In this example, we're passing a prop called "text" to the "Button" component with the value "Click me!". In the "Button" component's function, we access this prop by using the "props" argument and then referencing the prop by name: props.text.

Props are read-only, which means that a component can't modify its own props. Instead, if a component needs to change its behavior based on its props, it can use conditional logic or pass the props down to child components that can modify their own behavior.

Overall, props are a powerful tool in React that allow us to create modular, reusable components that can be customized and combined in many different ways.
</h3>

   </div>
  );
};

export default ListSubjects;