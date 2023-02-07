import React, { useState } from "react";

export default function AppForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름:</label>
      <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
      <label htmlFor="email">이메일:</label>
      <input type="text" id="email" name="email" value={form.email} onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}
