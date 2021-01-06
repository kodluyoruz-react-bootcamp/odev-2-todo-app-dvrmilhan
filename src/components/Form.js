import React from 'react';

const Form = ({inputText, setInputText , todos ,setTodos,todo}) => {
    const inputTextHandler = (e)=>{
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e)=>{
        e.preventDefault();
        setTodos([
            ...todos , {text: inputText, completed: false,id: Math.random()*1000 }
        ]);
        setInputText("");
    };

    return (
    <form onSubmit= {submitTodoHandler}>
        <input className="new-todo" 
        placeholder="What needs to be done?" 
        autoFocus
        onChange = {inputTextHandler}
        value= {inputText}/>
    </form>
    )
}

export default Form;