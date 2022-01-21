import { createSlice } from "@reduxjs/toolkit"


export const todosSlice = createSlice({
    name:"todos",
    initialState: {
        items: [{
            id:"1",
            title:"Learn Redux",
            completed:false,
        },
        {
            id:"2",
            title:"Learn React",
            completed:true,
        },
        {
            id:"3",
            title:"Learn JavaScript",
            completed:true,
        }
    ],
    activeFilter: "All"
    },
    reducers: {
       addTodo: (state,action)=>{
        state.items.push(action.payload);
       },
       toggle: (state,action)=>{
           const {id} = action.payload
           const item = state.items.find(item=>item.id===id)

           item.completed = ! item.completed

       },
       destroy: (state,action)=>{
           const id = action.payload

           const filtered=state.items.filter((item)=>item.id !==id)

           state.items=filtered;

       },
       changeActiveFilter: (state,action)=>{
           state.activeFilter=action.payload
       },
       clearCompleted: (state)=>{
           const filtered=state.items.filter((item)=>item.completed===false)
           state.items=filtered

       },
       toggleAll: (state,action)=>{
        //    const completed=state.items.filter((item)=>item.completed)
        //    const notCompleted=state.items.filter((item)=>!item.completed)

                state.items.map((item)=>{
                    item.completed=action.payload
                })

       }
    },
})

export const selecTodos= (state) => state.todos.items

export const {addTodo,toggle,destroy,changeActiveFilter,clearCompleted,toggleAll} = todosSlice.actions
export default todosSlice.reducer;