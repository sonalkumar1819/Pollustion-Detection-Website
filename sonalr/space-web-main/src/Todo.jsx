import React, { useState } from 'react'

// Task component
function Todo() {
//   let[todos,setTodos]=useState([]);
//   let[title,setTitle]=useState("");
//   const[body,setBody]=useState("");
//   const[editingIdx,setEditingIdx]=useState("");
//   const handleButton=()=>{
//     if(!title.trim() || !body.trim())return;

//     if(editingIdx!=null){
//       const updateTodos=[...todos];
//       updateTodos[editingIdx]={title,body};
//       setTodos(updateTodos);
//       setEditingIdx(null);
//     }
//     else{
//       setTodos([...todos,{title,body}]);
//     }

//     setTitle("");
//     setBody("");
//   };
//   const handleEdit=(index)=>{
//     setTitle(todos[index].title);
//     setBody(todos[index].body);
//     setEditingIdx(index);
//   }
//   const handleDelete=(index)=>{
//     const filtered=todos.filter((_,i));
//     setTodos(filtered);
//   }

const[todos,setTodos]=useState([]);
const [title,setTitle]=useState("");
const[body,setBody]=useState("");

const handleAdd=()=>{
  if(!title.trim() || !body.trim())return;
  setTodos([...todos,{title,body}]);
  setTitle("");
  setBody("");
};

  return (
    <>
            <input type="text" placeholder ="title" value={title} onChange={(e)=>setTitle(e.target.value)} disabled/>
            <textarea placeholder="Body" value={body} onChange={(e)=>setBody(e.target.value)}/>
                {
            <input type="checkbox"  checked={todo.completed} onChange={()=>toggleComplete(index)}}/>
            <button onClick={handleAdd}>Add Todos</button>

           
            <div>
            {todos.length===0 && <p>No Todods Yet</p>}
            {todos.map((todo,index)=>(
              <div key={index} >
              <h2>{todo.title}</h2>
              <p>{todo.body}</p>
              </div>
            ))}
            </div>
            
    </>
  )
};

export default Todo;