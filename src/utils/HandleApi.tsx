import axios from "axios";

const baseUrl = "http://localhost:8080";
const getAllTodo = (setTodo: any) => {
  axios.get(baseUrl).then(({ data }) => {
    setTodo(data);
  });
};

const addTodo = (text: String, setText: Function, setTodo: Function) => {
  axios.post(`${baseUrl}/save`, { text }).then((data) => {
    setText("");
    getAllTodo(setTodo);
  });
};
export { getAllTodo, addTodo };
