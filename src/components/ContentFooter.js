import React from 'react';

import {useSelector,useDispatch} from 'react-redux'

import {changeActiveFilter,clearCompleted,selecTodos} from "../redux/todos/todosSlice"


function ContentFooter() {

    const items=useSelector(selecTodos)
    
    const itemLeft=items.filter(item=> !item.completed).length

    const activeFilter= useSelector(state=>state.todos.activeFilter)

    const dispatch=useDispatch()



    return (
        <div className={`footer ${items.length===0 ?"hidden" :""}`}>
            <span className="todo-count">
                <strong>{itemLeft} </strong>
                item{itemLeft>1 && "s"} left
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" className={activeFilter==="All" ? "selected" : ""} 
                    onClick={()=>dispatch(changeActiveFilter("All"))} >All</a>
                </li>
                <li>
                    <a href="#/" className={activeFilter==="Active" ? "selected" : ""} 
                    onClick={()=>dispatch(changeActiveFilter("Active"))} >Active</a>
                </li>
                <li>
                    <a href="#/" className={activeFilter==="Completed" ? "selected" : ""} 
                    onClick={()=>dispatch(changeActiveFilter("Completed"))}>Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={()=>dispatch(clearCompleted())}>Clear completed </button>
        </div>
    )
}

export default ContentFooter;
