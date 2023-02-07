import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "엘리",
    title: "개발자",
    mentors: [
      {
        name: "밥",
        title: "시니어 개발자",
      },
      {
        name: "제임스",
        title: "시니어 개발자",
      },
    ],
  });
  const handleUpdate = () => {
    const prev = prompt("누구의 이름을 바꾸고 싶은가요?");
    const current = prompt("이름을 무엇으로 바꾸고 싶은가요?");
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        return mentor.name === prev ? { ...mentor, name: current } : { ...mentor };
      }),
    }));
  };
  const handleAdd = () => {
    const name = prompt("추가하고 싶은 멘토의 이름은 무엇인가요?");
    const title = prompt("당신 멘토의 직책은 무엇인가요?");
    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name, title }],
    }));
  };
  const handleDelete = () => {
    const name = prompt("어떤 멘토를 삭제하고 싶은가요?");
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((m) => m.name !== name),
    }));
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}
