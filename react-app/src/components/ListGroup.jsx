import { MouseEvent } from "react";

function ListGroup() {
  let items = [
    "About",
    "Home",
    "World",
    "Breaking",
    "Business",
    "Tech",
    "Legal",
  ];
  const handleClick = (event) => {
    console.log(event.target.textContent); // Log the clicked item text
  };
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Welp nothin here mayne</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
