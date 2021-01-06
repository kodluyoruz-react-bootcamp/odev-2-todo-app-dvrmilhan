import React from "react";

const ToDo = ({ text, todos, setTodos, todo }) => {
	const deleteHandler = () => {
		setTodos(todos.filter((el) => el.id !== todo.id));
	};

	const completeHandler = () => {
		setTodos(
			todos.map((item) => {
				if (todo.id === item.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};

	return (
		<>
			<li className={todo.completed ? "completed" : ""}>
				<div className="view">
					<input type="checkbox" className="toggle" onClick={completeHandler} />
					<label>{text}</label>
					<button onClick={deleteHandler} className="destroy"></button>
				</div>
			</li>
		</>
	);
};

export default ToDo;
