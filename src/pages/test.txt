import React from "react";
import "../App.css";
const LiftState = () => {
  return (
    <div className="materiabody">
      <br></br>
      <br></br>
      <h3 className="corletramateria">
        "Lifting state up" is a technique in React for managing state in a
        parent component and passing that state down to child components as
        props. This allows for greater control and flexibility in managing the
        state of your application. The basic idea is to identify a common parent
        component for a set of related child components that share some state.
        This parent component can manage the state and pass it down to the child
        components as props. When the child components need to update the shared
        state, they can do so by calling a callback function passed down from
        the parent component as a prop. Here's an example to illustrate the
        concept:
      </h3>

      <img
        className="tamanhoImagem10"
        src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677320505/IronReact/16_noeiyp.png"
        alt="imagem10"
      ></img>
      <h3 className="corletramateria">
        In this example, ParentComponent manages the count state using the
        useState hook. It also defines a incrementCount function that can be
        used to update the count state. ParentComponent then renders two
        instances of ChildComponent, passing the count state and the
        incrementCount function as props. ChildComponent simply displays the
        count and provides a button to increment it, calling the incrementCount
        function passed down from the parent component. As a result, both
        instances of ChildComponent share the same count state managed by the
        ParentComponent. When one of them increments the count, the other will
        see the updated count as well. This is just a simple example, but the
        technique can be applied to more complex components and state management
        scenarios as well. By lifting state up to a common parent component and
        passing it down as props, you can create a more modular and flexible
        architecture for your React application.
      </h3>
    </div>
  );
};
export default LiftState;
