import { useState, useEffect } from "react";

const Footer = ({ setStatus, todos, status, setTodos }) => {
	//Status
	const [count, setCount] = useState(0);

	//StatusHandlers
	const statusHandlerAll = () => {
		setStatus("all");
	};
	const statusHandlerActive = () => {
		setStatus("active");
	};
	const statusHandlerCompleted = () => {
		setStatus("completed");
	};
	const clearHandler = () => {
		setTodos(todos.filter((item) => item.completed !== true));
	};

	useEffect(() => {
		// eslint-disable-next-line array-callback-return
		let i = todos.filter((item) => {
			if (!item.completed) {
				return item;
			}
		});
		setCount(i.length);
		//filterHandler();
	}, [todos, status]);

	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{count}</strong>- items left
			</span>

			<ul className="filters">
				<li>
					<button className={onclick ? "selected" : ""} onClick={statusHandlerAll}>
						All
					</button>
				</li>
				<li>
					<button className={onclick ? "selected" : ""} onClick={statusHandlerActive}>
						Active
					</button>
				</li>
				<li>
					<button className={onclick ? "selected" : ""} onClick={statusHandlerCompleted}>
						Completed
					</button>
				</li>
			</ul>

			<button className="clear-completed" onClick={clearHandler}>
				Clear completed
			</button>
		</footer>
		
	);
};

export default Footer;
