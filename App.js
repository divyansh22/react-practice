import React from 'react';
import ReactDOM from 'react-dom/client';

const div = React.createElement("div", { id: "main" }, [
  React.createElement("h1", { id: "heading" }, "I am a test"),
  React.createElement("h2", { id: "heading2" }, "I am a heading2")
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
