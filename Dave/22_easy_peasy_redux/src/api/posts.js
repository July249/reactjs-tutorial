import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3500",
});

// Type below on Terminal
//
// npx json-server -p 3500 -w data/db.json
//
// To activate db.json data on mock server port!
