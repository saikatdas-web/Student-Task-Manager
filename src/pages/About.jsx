
function About() {
  return (
      <div style={{ padding:"40px", textAlign:"center" }}>

      <h1>About Student Task Manager</h1>

      <img 
        src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
        alt="task manager"
        width="200"
      />

      <p style={{ maxWidth:"700px", margin:"20px auto", fontSize:"18px" }}>
        "Student Task Manager is a simple and efficient web application
        designed to help students organize their daily academic tasks.
        The app allows users to add tasks, view task lists, mark the task as completed task, edit task and delete
        completed tasks easily".
      </p>

      <h2>Key Features</h2>

      <div style={{display:"flex", justifyContent:"center", gap:"40px", marginTop:"20px"}}>

        <div>
          <h3>📝 Add Tasks</h3>
          <p>Create and manage your daily study tasks.</p>
        </div>

        <div>
          <h3>📋 View Tasks</h3>
          <p>See all your pending & completed tasks in one place.</p>
        </div>

        <div>
          <h3>🖊️ Edit Tasks</h3>
          <p>You can edit your tasks.</p>
          </div>
       <div>
         <h3>✅ Mark Tasks </h3>
         <p>Mark your task as completed tasks.</p>
       </div>

        <div>
          <h3>🗑 Delete Tasks</h3>
          <p>Remove tasks once they are completed.</p>
        </div>

      </div>
         
    </div>
  );
};

export default About;
