import React from "react";
import Thefirstpage from "./Authentication/Thefirstpage";
import Loginpage from "./Authentication/Loginpage";
import Signup from "./Authentication/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./Thepostescomponent/Posts";
import Test from "./Authentication/Test";
import Testx from "./Authentication/Testx";
import Sidebar from "./Thepostescomponent/Sidebar"
// import Sidebarvx from "./Thepostescomponent/Sidebarvx"
import Endpartpost from "./Thepostescomponent/Endpartpost";
import Middelpart from "./Thepostescomponent/Middelpart";
import Tasks from "./Thepostescomponent/Tasks"
// import Posts from "./Thepostescomponent/Posts"
import Podcast from "./Thepostescomponent/Podcast"
import AichatMiddelpart from "./Thepostescomponent/AichatMiddelpart"
import Sidebarvx from "./Thepostescomponent/Sidebarvx";
import Remider from "./Thepostescomponent/Remider";
import Home from "./Thepostescomponent/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Thefirstpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/testx" element={<Testx />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Sidebarvx" element={<Sidebarvx/>}/>
        <Route  exact path="/posts" element={<Posts/>}/>
        <Route  exact path="/home" element={<Home/>}/>
        <Route  exact path="/tasks" element={<Tasks/>}/>
        <Route  exact path="/tasks/remider" element={<Remider/>}/>
        <Route  exact path="/podcast" element={<Podcast/>}/>
        {/* <Route  exact path="/podcast" element={</>}/>
        <Route  exact path="/podcast" element={<Podcast/>}/> */}
        {/* <Route path="/endpart" element={<Endpart/>}/> */}
      </Routes>
      
    </Router>
  );
}
export default App;
