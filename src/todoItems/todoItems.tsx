import React from "react";

export default function TodoItems(): JSX.Element {
  const todos = [
    {
      title: "Avancer sur le projet",
    },
    {
      title: "Envoyer un message à Sandy",
    },
  ];

  return (
    <div className="bg-white">
      {todos.map((todo, i) => {
        return <div key={i}>{todo.title}</div>;
      })}
    </div>
  );
}
