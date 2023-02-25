import React from "react";
import "../App.css";
const Routing = () => {
  return (
    <div className="materiabody">
      <br></br>
      <br></br>
      <h3 className="corletramateria">
        Routing in React allows you to create multi-page applications with URLs
        that correspond to different views or pages. React provides several
        libraries for routing, such as React Router and Reach Router, which make
        it easy to define and manage routes in your application. The basic idea
        of routing in React is to map URLs to specific components that render
        the content for each page. When a user clicks on a link or types a URL
        in the browser, the router checks the URL and renders the appropriate
        component. Here's a simple example of how to define routes in React
        using the React Router library:
      </h3>

      <img
        className="tamanhoImagem12"
        src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677321927/IronReact/18_gwfwt1.png"
        alt="imagem12"
      ></img>
      <h3 className="corletramateria">
        In this example, we import the BrowserRouter, Route, and Link components
        from the react-router-dom library. We define two components, Home and
        About, which represent the content for the two pages in our application.
        We then define a Router component, which wraps our entire application.
        Inside the Router, we define a navigation menu with two links, one for
        the Home page and one for the About page. We also define two Route
        components, one for each page in our application. The exact keyword in
        the Route for the Home page ensures that it only matches the exact path
        /, while the path keyword in the Route for the About page defines the
        path for that page. When the user clicks on a link or types a URL in the
        browser, the router matches the URL to the appropriate Route component
        and renders the corresponding content. The Link component is used to
        generate the appropriate URLs for each link in the navigation menu. This
        is just a simple example, but you can create more complex routes with
        nested routes, dynamic routes, and more using the React Router library.
        With routing in React, you can create multi-page applications that
        provide a seamless user experience and help organize your code.
      </h3>
    </div>
  );
};
export default Routing;
