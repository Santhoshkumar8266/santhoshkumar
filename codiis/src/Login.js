import'./App.css';
import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useFormik} from 'formik'
import { useNavigate } from 'react-router-dom';
import AuthContext from './context';



const users=[
  {
    name:'santhos',
    email:"santhos@gmail.com",
    password:'12345',
    isAdmin:false
  },
  {
    name:'sandy',
    email:"sandy@gmail.com",
    password:'12345',
    isAdmin:true
  }
]

function App() {
  const navigate=useNavigate()
  const authContext=useContext(AuthContext)
   
  const formik=useFormik({
    initialValues:{
      email:"",
      password:"",
      
    },
    onSubmit:(values)=>{
      console.log(values);
      users.map(item=>{
        if(item.email==values.email){
          if(item.password==values.password) {
            authContext.setUser(item)
            return (
            navigate('/video')
          )}
          return alert('invalid password')
        }
      })
    //  navigate('/video')
      
    },
    validate:(values)=>{
      let errors = {};
        if (!values.email) {
        errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
        } 
        if(!values.password) errors.password="Required";
        return errors;
    }
  })
  return (

    <center>
        <form onSubmit={formik.handleSubmit}>
          <label>Email</label>
        
        <input id="email" name="email" placeholder='enter email' type="email" onChange={formik.handleChange}
        value={formik.values.email} />
        {formik.errors.email ? <div style={{ color: "red" }} >{formik.errors.email}</div> : 
        null}
        
        
        <br></br><br></br>
        <label>password</label>
        <input id="password" placeholder='enter password' name="password" type="password"
        onChange={formik.handleChange} value={formik.values.password} /><br></br>
        {formik.errors.password ? <div style={{ color: "red" }} 
        >{formik.errors.password}</div> : null}
       <br></br><br></br> <button type="submit">Submit </button>
     

      

      <div className="text-center">
        
        <p>Not a member? <a href="#/Registrion">Register</a></p>
        
      </div>
      </form>
      </center>
     
  );
}

export default App;