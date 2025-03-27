import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Se você tiver um arquivo de estilo

// O componente principal do React
function App() {
  return (
    <div>
      <h1>Hello, React with Vite!</h1>
    </div>
  );
}

// Encontre o elemento root e renderize o React nele
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
