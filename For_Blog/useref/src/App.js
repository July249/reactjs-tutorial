import { useState } from "react";
import "./App.css";

function App() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // const handleIdChange = (e) => {
  //   setUserId(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setUserPassword(e.target.value);
  // };

  const handleChange = (e) => {
    if (e.target.id === "id") {
      setUserId(e.target.value);
    } else if (e.target.id === "password") {
      setUserPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      userId,
      userPassword,
    };
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">아이디 </label>
        <input
          type="text"
          id="id"
          placeholder="아이디를 입력하여 주세요."
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">비밀번호 </label>
        <input
          type="text"
          id="password"
          placeholder="비밀번호를 입력하여 주세요."
          onChange={handleChange}
        />
        <br />
        <br />
        <button>로그인</button>
      </form>

      <p>아이디: {userId}</p>
      <p>비밀번호: {userPassword}</p>
      <br />
      <br />
      <p>서버에 전달</p>
    </div>
  );
}

export default App;
