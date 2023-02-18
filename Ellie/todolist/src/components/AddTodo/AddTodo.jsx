import Button from "../Button/Button";

const AddTodo = ({ onCreate, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="todoInput"></label>
      <input id="todoInput" type="text" placeholder="Add To Do" onChange={onCreate} />
      <Button type="submit" btnFor="add">
        Add
      </Button>
    </form>
  );
};

export default AddTodo;
