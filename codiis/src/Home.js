import "./App.css";
import Image from "./home.jpg";
import Nav from "./Nav";
import {useNavagate} from "react-router-dom";
import Login from './Login.js';



export default function Home() {
  return (
    <>
   
    <h1 > Welcome To COIDIIS</h1>
 
   
    
     <div className="home ">
      <div className="clr"></div>
       <Login />
         
        
      </div>
    </>
  );
}
