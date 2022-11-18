import logo from './logo.svg';
import './App.css';
import {HashRouter,BrowserRouter,Route,Routes,Link} from "react-router-dom";
import Home from './Home'
import Nav from './Nav';
 import Registrion from './Registrion';
 import login from "./Login"
 import Videoinput from './Videoinput';
 import Mp4 from './mp4video.js';
 import Addplan from './Add Plan';
 import AuthContext from './context';
import { useState } from 'react';
export default function App() {

 const[user,setUser]=useState()

  return (
    <>
      <HashRouter>
        <div>
         
           <AuthContext.Provider value={{user,setUser}}>
             <Routes>
              
            {/* <Route path="/" element={<Nav />} /> */}
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Registrion" element={<Registrion/>} />
              <Route exact path="/video" element={<Mp4/>} />              
              <Route exact path="/Videoinput" element={<Videoinput />} />
              <Route exact path="/Login" element={<login />} />
              <Route exact path="/Addplan" element={<Addplan/>}/>
              
            </Routes> 
            </AuthContext.Provider>
          {/* </userContext.Provider> */}
          
        </div>
      </HashRouter>
    </>
  );
}

