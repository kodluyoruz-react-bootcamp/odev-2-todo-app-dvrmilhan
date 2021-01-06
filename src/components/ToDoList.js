import ToDo from "./ToDo";

const ToDoList = ({ todos, setTodos, filterTodos }) => {
	return (
		<section className="main">
			<ul className="todo-list">
				{filterTodos.map((todo) => (
					<ToDo todos={todos} setTodos={setTodos} text={todo.text} todo={todo} key={todo.id} />
				))}
			</ul>
		</section>
	);
};

export default ToDoList;
