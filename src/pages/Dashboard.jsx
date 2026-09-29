import { useEffect,useState } from "react";

function Dashboard(){

  const [tasks,setTasks] = useState([]);

  useEffect(()=>{

    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    setTasks(storedTasks);

  },[]);

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(task => task.completed).length;

  const pendingTasks = totalTasks - completedTasks;

  return(

    <div style={{textAlign:"center"}}>

      <h1>Welcome, Student</h1>

      <h3>Total Tasks: {totalTasks}</h3>

      <h3>Completed Tasks: {completedTasks}</h3>

      <h3>Pending Tasks: {pendingTasks}</h3>

    </div>

  );
};

export default Dashboard;
