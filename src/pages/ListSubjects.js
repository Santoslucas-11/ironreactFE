import React from "react";
import "../App.css";

const ListSubjects = () => {
  return (
    <div className="materiabody">
      <br></br>
      <br></br>
      <h3 className="corletramateria">
        Functional components are just JavaScript functions and they let you
        return/render JSX content to the DOM.
        <p></p> We create a functional component by writing a JavaScript
        function:
      </h3>
      <img
        className="tamanhoimagensmateria"
        src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677012344/IronReact/1_olp5sq.png"
        alt="exemple1"
      />
      <h3 className="corletramateria">
        Class Components We create a class component by defining a class that
        extends React.Component.
        <p></p>
        When creating a class component we must import React in the file.
        <p></p>
        As well, class component must contain a render(){} method:
        <p></p>
      </h3>
      <img
        className="tamanhoimagensmateria"
        src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677013162/IronReact/2_h7rlcg.png"
        alt="exemplo2"
      ></img>

      <h3 className="corletramateria">
      Introduction - Know how the Component tree works <p></p>
Components are the core building block of React apps. A typical React app is composed <p></p>
 of many components. The structure of a React app can be represented as a component tree.<p></p>
  The tree starts with one root component (usually named App) and has an infinite amount of <p></p>
   nested child components.

To illustrate this, we’ll create and display a new component in our existing app.<p></p>
 In the folder src/components create a file Button.js and add the following content to it:<p></p>
      </h3>
      <img
        className="tamanhoimagensmateria"
        src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677013869/IronReact/3_tsvz2h.png"
        alt="exemplo3"
      ></img>
    </div>
  );
};

export default ListSubjects;
