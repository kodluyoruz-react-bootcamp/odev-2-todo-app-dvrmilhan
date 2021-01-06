import "./App.css";
import { useState } from "react";
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

  const selectStatus= (e)=>{
    setStatus(e);
  }
	return (
		<section className="todoapp">
			<header className="header">
				<h1>todos</h1>

				{/* there should be form */}
        <Form inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        filterTodos ={filterTodos} 
        status={status} 
        setStatus={setStatus} 
        setfilterTodos ={setfilterTodos}/>

				{/* there should be list of todos */}
        <ToDoList todos={todos} 
        setTodos={setTodos} 
        filterTodos ={filterTodos} 
        status={status} 
        setStatus={setStatus} 
        setfilterTodos ={setfilterTodos}/>

        <Footer selectStatus = {selectStatus}/>
			</header>
		</section>
	);
}

export default App;
