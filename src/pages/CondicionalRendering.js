import React from "react";
import "../App.css";
const CondicionalRendering = () => {
  return (
    <div className="materiabody">
      <br></br>
      <br></br>
      <h3 className="corletramateria">
      In React, conditional rendering is a technique used to conditionally render components or content based on a certain condition. This can be useful for showing or hiding certain parts of a UI based on user interactions or other events.

There are a few ways to implement conditional rendering in React, including using if statements, ternary operators, and logical && operator.

Using if statements:
</h3>

<img className="tamanhoImagem9"
    src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677185406/IronReact/10_ucoil1.png"
  alt="imagem9"></img>
  <h3 className="corletramateria">
  Using ternary operators:
</h3>
<img className="tamanhoImagem10"
    src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677186161/IronReact/11_nxljbp.png"
  alt="imagem10"></img>
  <h3 className="corletramateria">
  Using logical && operator:
</h3>
<img className="tamanhoImagem11"
    src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677186267/IronReact/12_meaquw.png"
  alt="imagem11"></img>
  <h3 className="corletramateria">
  In these examples, the isLoggedIn prop is used to conditionally render different components or content based on whether the user is logged in or not. When isLoggedIn is true, the component will render a welcome message, and when it's false, it will render a login prompt.

Overall, conditional rendering is a powerful tool in React that allows us to create dynamic and interactive UIs that respond to user actions and other events. By using conditional rendering, we can create more flexible and customizable components that can adapt to different scenarios and use cases.
</h3>
    </div>
  );
};
export default CondicionalRendering;
