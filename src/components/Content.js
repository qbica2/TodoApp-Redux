import React from 'react';
import Todolist from "./Todolist"
import ContentFooter from './ContentFooter'

import {toggleAll,selecTodos} from "../redux/todos/todosSlice"
import {useSelector,useDispatch} from 'react-redux'

function Content() {
    const items= useSelector(selecTodos)

    const completed=items.filter((item)=>item.completed)
    const notCompleted=items.filter((item)=>!item.completed)

    const dispatch =useDispatch();

    const handlerMarkAll = () => {
        if(notCompleted.length===0){
            dispatch(toggleAll(false))
        }else if(completed.length===0){
            dispatch(toggleAll(true))
        }else{
            dispatch(toggleAll(true))
        }
        
    }

    return (
        <>
            <div className="main">
                <input className="toggle-all" type="checkbox" checked={notCompleted.length===0? true:false} onChange={(e)=>notCompleted.length===0? e.target.checked===true : e.target.checked===false}/>
                <label htmlFor="toggle-all" onClick={handlerMarkAll} >Mark all as complete</label>
                <Todolist />

            </div>

            <ContentFooter />
        </>
    )
}

export default Content;
