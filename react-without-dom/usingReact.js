// const ulElement = React.createElement("ul", null, null);
// console.log(ulElement);


const ulElement = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "Item 1"),
  React.createElement("li", null, "Item 2"),
  React.createElement("li", null, "Item 3")
);

console.log(ulElement);




const root = ReactDOM.createRoot(document.getElementById("formjs"));
root.render(ulElement);
