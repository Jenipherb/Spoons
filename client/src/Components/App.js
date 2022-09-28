import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Landing from "./Landing"




function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [categoryName, setCategoryName] = useState("")
  
  console.log(setCategoryName)
  const navigate = useNavigate();

  const onLogin = () => {
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error("Not logged in");
        }
      })
      .then((data) => setUser(data))
      .then(() => setLoggedIn(true));
  };

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      setUser({});
      setLoggedIn(false);
    });
  };

  useEffect(() => {
    loggedIn ? goToHomePage() : goToLandingPage();
  }, [loggedIn]);

  const goToHomePage = () => navigate("/home");
  const goToLandingPage = () => navigate("/");

  return (
    <div className="App">
      {loggedIn ? (
       <Navbar
       user={user}
       handleLogout={handleLogout}
       setCategoryName={setCategoryName}
     /> 
      ) :null}
      <Routes>
        <Route exact path="/" element={<Landing onLogin={onLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
