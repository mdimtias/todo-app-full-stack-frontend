import DeleteIcon from "./Icon/DeleteIcon";
import EditIcon from "./Icon/EditIcon";


const Todo = (props : {text: String, updateMode: Function, deleteMode: Function}) => {
    return (
        <div className="bg-black p-4 rounded-lg flex justify-between gap-2">
            <h2 className="font-bold text-xl text-white">{props.text}</h2>
            <div className="flex gap-2">
                <button onClick={()=>props.updateMode()}>
                <EditIcon></EditIcon>
                </button>
                <button onClick={()=>props.deleteMode()}>
                <DeleteIcon></DeleteIcon>
                </button>
            </div>
        </div>
    );
};

export default Todo;