import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./component/Todo";
import { addTodo, getAllTodo, updateTodo } from "./utils/HandleApi";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState<string>("");
  const [isUpdating, setIsUpdating] = useState(false)
  const [todoId, setTodoId] = useState<string>("")

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const updateMode = (_id:string, text:string) => {
    setIsUpdating(true);
    setTodoId(_id);
    setText(text);
  };
  const deleteMode = () => {};

  return (
    <>
      <div className="app">
        <div className="container mx-auto">
          <h1 className="text-center font-bold text-3xl py-5">Todo App</h1>
          <div className="top text-center flex justify-center gap-5 py-5">
            <input
              className="py-2 px-5 outline-none text-xl font-medium border border-blue-400 rounded-lg"
              type="text"
              placeholder="add todo"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="add">
              
              {
                isUpdating? <button
                className="bg-black text-white py-3 px-5 rounded-md"
                onClick={() => updateTodo(todoId, text, setText, setTodo, setIsUpdating)}
              >
                Update
              </button> :
              <button
              className="bg-black text-white py-3 px-5 rounded-md"
              onClick={() => addTodo(text, setText, setTodo)}
            >
              Add
            </button>
              }
            </div>
          </div>
          <div className="list flex flex-col gap-5">
            {todo.map((item: { text: string; _id: string }) => (
              <Todo
                key={item._id}
                text={item.text}
                updateMode={()=>updateMode(item._id, item.text)}
                deleteMode={deleteMode}
              ></Todo>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
