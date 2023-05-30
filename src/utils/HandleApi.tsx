import axios from "axios";

const baseUrl = "http://localhost:8080";
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
    .then((data) => {
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
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllTodo(setTodo);
    })
    .catch((error) => console.log(error));
};
export { getAllTodo, addTodo, updateTodo };
