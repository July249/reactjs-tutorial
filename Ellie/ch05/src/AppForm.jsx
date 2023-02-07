import React, { useState } from "react";

export default function AppForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름:</label>
      <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="email">이메일:</label>
      <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}
