import React from "react";

const Footer = ({  selectStatus }) => {
	return (

		<footer className="footer">
			<span className="todo-count">
				<strong>?????</strong>
				items left
			</span>

			<ul className="filters">
				<li>
					<button className={onclick ? "selected" : ""} >
						All
					</button>
				</li>
				<li>
					<button className={onclick ? "selected" : ""} >
						Active
					</button>
				</li>
				<li>
					<button className={onclick ? "selected" : ""} >
						Completed
					</button>
				</li>
			</ul>
			<button className="clear-completed">Clear completed</button>
		</footer>
	);
};

export default Footer;
