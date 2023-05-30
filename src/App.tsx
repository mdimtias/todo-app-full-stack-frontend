import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./component/Todo";
import { addTodo, deleteTodo, getAllTodo, updateTodo } from "./utils/HandleApi";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState<string>("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState<string>("");

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const updateMode = (_id: string, text: string) => {
    setIsUpdating(true);
    setTodoId(_id);
    setText(text);
  };
  const deleteMode = (_id: string) => {
    deleteTodo(_id, setTodo);
  };

  return (
    <>
      <div className="app">
        <div className="container mx-auto">
          <h1 className="text-center font-bold text-3xl pt-5">Todo App</h1>
          <div className="top text-center flex justify-center gap-5 py-5">
            <input
              className="border border-gray-300 rounded-md py-2 px-4 outline-none"
              type="text"
              placeholder="Enter a todo"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="add">
              {isUpdating ? (
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4"
                  onClick={() =>
                    updateTodo(todoId, text, setText, setTodo, setIsUpdating)
                  }
                >
                  Update
                </button>
              ) : (
                <button
                  className="bg-blue-500 hover:bg-blue-600 font-semibold text-white rounded-md py-2 px-5"
                  onClick={() => addTodo(text, setText, setTodo)}
                >
                  Add
                </button>
              )}
            </div>
          </div>
          <div className="list flex flex-col justify-center lg:items-center gap-3 px-5">
            {todo.map((item: { text: string; _id: string }) => (
              <Todo
                key={item._id}
                text={item.text}
                updateMode={() => updateMode(item._id, item.text)}
                deleteMode={() => deleteMode(item._id)}
              ></Todo>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
