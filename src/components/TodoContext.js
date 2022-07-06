 import React, {useReducer,createContext, useContext, useRef} from 'react'

 const initialTodos=[
     {
        id:1,
        text: 'useEffect 복습',
        done: true
     },
     {
        id:2,
        text: 'Context API 복습',
        done: true
     },
     {
        id:3,
        text: 'styled-components 로 예쁜거 만들어보기',
        done: false
     },
     {
        id:4,
        text: '토이 프로젝트 뭐 해볼지 정하기',
        done: false
     }
 ];

 function todoReducer(state,action){
     switch (action.type){
        case 'CREATE':
            return state.concat(action.todo)
        case 'TOGGLE':
            return state.map(todo=>
                todo.id===action.id?{...todo,done:!todo.done}:todo
            );
        case 'REMOVE':
            return state.filter(todo=>todo.id!==action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
     }
 };

 const TodoStateContext=createContext();
 const TodoDispatchContext=createContext();
 const TodoNextIdContext=createContext();

 export function TodoProvider({children}){
     const [state,dispatch]=useReducer(todoReducer,initialTodos)
     const nextId=useRef(5)
     return(
         <TodoStateContext.Provider value={state}>
             <TodoDispatchContext.Provider value={dispatch}>
                 <TodoNextIdContext.Provider value={nextId}>
                     {children}
                 </TodoNextIdContext.Provider>
             </TodoDispatchContext.Provider>
         </TodoStateContext.Provider>

     );
 }//이 부분 다시 공부!

 export function useTodoState(){
     return useContext(TodoStateContext);
 }
 export function useTodoDispatch(){
     return useContext(TodoDispatchContext)
 }
 export function useTodoNextId(){
     return useContext(TodoNextIdContext)
 }