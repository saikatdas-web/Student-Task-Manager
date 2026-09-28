import {useState,useEffect} from "react";

function Tasks(){

  // const [tasks,setTasks] = useState([]);

    const [tasks,setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
   });
  
   const [taskText,setTaskText] = useState("");
 
   const [editId,setEditId] = useState(null);

   useEffect(()=>{

   const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    setTasks(savedTasks);

   },[]);

   useEffect(() => {

    localStorage.setItem("tasks",JSON.stringify(tasks));

   },[tasks]);

   const handleAddTask = () => {

    if(taskText === "") return;

    if(editId){

      const updated = tasks.map(task =>
        task.id === editId ? {...task,text:taskText} : task
      );

      setTasks(updated);

      setEditId(null);

    }
    else{

      const newTask = {
        id:Date.now(),
        text:taskText,
        completed:false
      };

      setTasks([...tasks,newTask]);

    }

    setTaskText("");

  };

  const handleDelete = (id) => {

    const updated = tasks.filter(task => task.id !== id);

    setTasks(updated);

  };

  const handleToggle = (id) => {

    const updated = tasks.map(task =>
      task.id === id ? {...task,completed:!task.completed} : task
    );

    setTasks(updated);

  };

  const handleEdit = (task) => {

    setTaskText(task.text);

    setEditId(task.id);

  };

  return(
 
    <div style={{textAlign:"center"}}>

      <h2>Task Manager</h2>

      <input
      type="text"
      value={taskText}
      onChange={(e)=>setTaskText(e.target.value)}
      placeholder="Enter task"
      />

      <button onClick={handleAddTask}>
        {editId ? "Update Task" : "Add Task"}
      </button>

      <ul>

        {tasks.map(task => (

          <li key={task.id}>

            <span style={{
              textDecoration: task.completed ? "line-through" : "none"
            }}>

              {task.text}

            </span>

            <button onClick={()=>handleToggle(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button onClick={()=>handleEdit(task)}>
              Edit
            </button>

            <button onClick={()=>handleDelete(task.id)}>
              Delete
            </button>

          </li>

        ))}

      </ul>

    </div>

  );

};

export default Tasks;
