import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

function Navbar() {
  return (
    <header style={{ backgroundColor: "yellow" }}>
      <Avatar
        image="https://images.unsplash.com/photo-1673195006104-1f1f1facbb97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2Nnx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        name="Bob"
        size={200}
      />
      <p>안녕하세요!</p>
    </header>
  );
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img src={image} alt={`${name}`} width={size} height={size} style={{ borderRadius: "50%" }} />
    </div>
  );
}
