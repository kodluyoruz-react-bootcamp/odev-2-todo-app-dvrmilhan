import "./App.css";
import { useState, useEffect } from "react";
//Import components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";

function App() {
	//States
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filterTodos, setfilterTodos] = useState([]);

	//Functions
	// if (status === "completed") {
	//   setfilterTodos(todos.filter((item) => item.completed === true));
	// }
	// if (status === "active") {
	//   setfilterTodos(todos.filter((item) => item.completed === false));
	// }
	// setfilterTodos(todos);

	useEffect(() => {
		switch (status) {
			case "completed":
				setfilterTodos(todos.filter((todo) => todo.completed === true));
				break;
			case "active":
				setfilterTodos(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setfilterTodos(todos);
				break;
		}
	}, [todos, status]);

	return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>

          {/* there should be form */}
          <Form
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
            status={status}
            setStatus={setStatus}
          />

          {/* there should be list of todos */}
          <ToDoList
            todos={todos}
            setTodos={setTodos}
            status={status}
            setStatus={setStatus}
            filterTodos={filterTodos}
          />

          <Footer setStatus={setStatus} todos={todos} setTodos={setTodos} status={status} />
        </header>
      </section>
      <footer class="info">
      <p>Click to edit a todo</p>
      <p>
        Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  </div>
	);
}

export default App;
