const Lists = ({ lists }) => {
  return (
    <ul>
      {lists.map((list) => (
        <li key={list.id}>{JSON.stringify(list)}</li>
      ))}
    </ul>
  );
};

export default Lists;
