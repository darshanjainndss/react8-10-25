import React, { useState, useTransition } from "react";

export default function UseTransitionExample() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 20;

  function handleChange(e) {
    const value = e.target.value;
    setInput(value);

    // Use transition for expensive update
    startTransition(() => {
      const newList = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        newList.push(value + " " + i);
      }
      setList(newList);
    });
  }

  return (
    <div className="p-4">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type something..."
        className="border p-2 rounded"
      />

      {isPending && <p className="text-gray-500">Updating list...</p>}

      <ul className="mt-2 h-40 overflow-auto border rounded p-2">
        {list.map((item, index) => (
          <li key={index} className="text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
