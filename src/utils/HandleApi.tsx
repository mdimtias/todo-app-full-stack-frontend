import axios from "axios";

const baseUrl = "https://todo-app-full-stack-backend.onrender.com";
const getAllTodo = (setTodo: any) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      setTodo(data);
    })
    .catch((error) => console.log(error));
};

const addTodo = (text: String, setText: Function, setTodo: Function) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then(() => {
      setText("");
      getAllTodo(setTodo);
    })
    .catch((error) => console.log(error));
};

const updateTodo = (
  todoId: string,
  text: String,
  setText: Function,
  setTodo: Function,
  setIsUpdating: Function
) => {
  axios
    .put(`${baseUrl}/update`, { _id: todoId, text })
    .then(() => {
      setText("");
      setIsUpdating(false);
      getAllTodo(setTodo);
    })
    .catch((error) => console.log(error));
};

const deleteTodo = (todoId: string, setTodo: Function) => {
  axios
    .delete(`${baseUrl}/delete`, { data: { _id: todoId } })
    .then(() => {
      getAllTodo(setTodo);
    })
    .catch((error) => console.log(error));
};

export { getAllTodo, addTodo, updateTodo, deleteTodo };
