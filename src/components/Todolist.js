import React from 'react';

import {useSelector,useDispatch} from 'react-redux'
import {toggle,destroy,selecTodos} from '../redux/todos/todosSlice'

let filtered= []

function Todolist() {

    const items = useSelector(selecTodos)
    const activeFilter= useSelector(state=>state.todos.activeFilter)

    const dispatch=useDispatch()

    const handleDestroy = (id) =>{

        if(window.confirm("Are you sure?")){
            dispatch(destroy(id))
        }
    }

    switch(activeFilter){

        case"Active": 
            filtered=items.filter((item)=>item.completed===false)
            break;
        case"Completed":
            filtered=items.filter((item)=>item.completed===true)
            break;
        case"All":
            filtered=items
            break;
    }

    return (
        <ul className="todo-list">
            {
                filtered.map((item,i)=>(
                    <li key={i} className={item.completed ? ' completed' : ""}>
                        <div className="view">
                            <input className="toggle" type="checkbox" checked={item.completed} onChange={()=>dispatch(toggle({id: item.id}))}/>
                            <label >{item.title}</label>
                            <button className="destroy" onClick={()=>handleDestroy(item.id)} ></button>
                        </div>
                    </li>
                ))
            }

        </ul>
    )
}

export default Todolist;
