import Button from "../Button/Button";
import ItemStyle from "./Item.module.css";
import { BsTrashFill, BsTrash } from "react-icons/bs";

const Item = ({ todo, onDelete }) => {
  return (
    <li className={ItemStyle.item}>
      <label htmlFor="checkbox"></label>
      <input id="checkbox" className={ItemStyle.checkbox} type="checkbox" />
      <p>{todo}</p>
      <Button type="button" btnFor="trash" onClick={() => onDelete()}>
        <BsTrashFill />
      </Button>
    </li>
  );
};

export default Item;
