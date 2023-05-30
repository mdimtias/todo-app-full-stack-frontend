import DeleteIcon from "./Icon/DeleteIcon";
import EditIcon from "./Icon/EditIcon";

const Todo = (props: {
  text: String;
  updateMode: Function;
  deleteMode: Function;
}) => {
  return (
    <div className="list-item-bg p-4 rounded-lg flex justify-between gap-2 lg:w-1/2">
      <p className="font-semibold text-xl text-white">{props.text}</p>
      <div className="flex gap-2">
        <button onClick={() => props.updateMode()}>
          <EditIcon></EditIcon>
        </button>
        <button onClick={() => props.deleteMode()}>
          <DeleteIcon></DeleteIcon>
        </button>
      </div>
    </div>
  );
};

export default Todo;
