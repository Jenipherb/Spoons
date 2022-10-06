import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Landing from "./Landing"
import Home from "./Home";
import TaskList from "./TaskList";
import SignUp from "./SignUp";
import Login from "./Login";
import Task from "./Task"
import YourSpoon from "./YourSpoon";





function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
 
  
  
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me/tasks_spoons").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);
  
  console.log(user)
  function handleLogin(user){
    setUser(user)
  }

  function handleLogout(){
    setUser(null)
  }



  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={<Landing onLogin={handleLogin} />} /> 
        <Route exact path="/home" element={<Home username={user.username} tasks={user.tasks} spoons={user.spoons} onLogout={handleLogout}/>}/>
        <Route path="/task-added" element={<Task user={user}/>}/>
        <Route path="/tasks" element={<TaskList user={user}/>}/>
        <Route path="/view-spoon" element={<YourSpoon user={user}/>}/>
        <Route path="/login" element={<Login onLogin={handleLogin}/>}/>
        <Route path="/signup" element={<SignUp onLogin={handleLogin}/>}/>
      </Routes>
    </div>
  );
}

export default App;
