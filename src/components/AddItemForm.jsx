import { useState, useRef } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemTest] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    //basic validation

    if (!itemText) {
      alert("Item cannot be empty");
      inputRef.current.focus();
      return; //----guard statement
    }

    onAddItem(itemText);
    setItemTest("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemTest(e.target.value);
        }}
        autoFocus
      />
      <Button type="primary">Add to list</Button>
    </form>
  );
}
