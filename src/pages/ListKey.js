import React from "react";
import "../App.css";
const ListKey = () => {
  return (
    <div className="materiabody">
      <br></br>
      <br></br>
      <h3 className="corletramateria">
       LISTS: Lists are one of the most common parts of the UI in web applications, you can render a list of elements using the map method to iterate over an array of data and create a new array of React elements.
        <p></p>Here's an example of how to render a list of items in React:
      </h3>
      <img
        className="tamanhoImagem6"
        src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677186685/IronReact/13_kazhwy.png"
        alt="imagem6"
      />
      <h3 className="corletramateria">
        In this example, the List component receives an array of items as a prop, and it uses the map method to create a new array of 'li' elements for each item. The resulting array of elements is returned as the content of a 'ul' element.
      <p></p>Note that you can include any valid JSX within the map function to customize the rendering of each item in the list. For example, you could render a more complex element for each item:
      </h3>
      <img
        className="tamanhoImagem7"
        src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677187070/IronReact/14_dz8lac.png"
        alt="imagem7"
      />
      <h3 className="corletramateria">
      In this example, each item in the items array has a name and description property, which are used to render a 'h3' and 'p' element for each item. The resulting array of elements is returned as the content of a 'div' element.
       </h3>
       <h3 className="corletramateria">
       KEYS: Keys are special props that provide a unique identifier to each element in a list or an array of elements. Keys help React identify which items have changed, been added, or been removed from the list, and they help optimize the rendering process.
        <p></p>Here's an example of how to use keys in a list of elements:
      </h3>
      <img
        className="tamanhoImagem8"
        src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677186685/IronReact/15_boy0ms.png"
        alt="imagem8"
      />
      <h3 className="corletramateria">
      In this example, each item in the items array has an id property, which is used as the key prop for each 'li' element. This provides a unique identifier for each element in the list.
      <p></p>Note that it's generally not recommended to use the index of an item in the array as the key prop if the order of items may change, as this can cause unexpected behavior. Instead, it's best to use a unique identifier from the data itself, such as an ID field.
      <p></p>If you don't provide a key prop for each element in a list, React will generate a warning in the console. Additionally, if the key values are not unique, React will also generate a warning in the console.
      </h3>
    </div>
  );
};
export default ListKey;