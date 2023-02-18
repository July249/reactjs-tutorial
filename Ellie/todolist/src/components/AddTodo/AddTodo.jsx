import Button from "../Button/Button";

const AddTodo = ({ inputRef, onCreate, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="todoInput"></label>
      <input id="todoInput" type="text" placeholder="Add To Do" ref={inputRef} onChange={onCreate} />
      <Button type="submit" btnFor="add">
        Add
      </Button>
    </form>
  );
};

export default AddTodo;
