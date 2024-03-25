import React from "react";
import Thefirstpage from "./Authentication/Thefirstpage";
import Loginpage from "./Authentication/Loginpage";
import Signup from "./Authentication/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Authentication/Test";
import Posts from "./Thepostescomponent/Posts";
import Sidebar from "./Thepostescomponent/Sidebar"
import Endpart from "./Thepostescomponent/Endpart";
import Middelpart from "./Thepostescomponent/Middelpart";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Thefirstpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sidebar" element={<Sidebar/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/middelpart" element={<Middelpart/>}/>
        <Route path="/endpart" element={<Endpart/>}/>
      </Routes>
    </Router>
  );
}
export default App;
