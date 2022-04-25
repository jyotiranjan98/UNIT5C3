import {React} from "react"
import {useState} from "react"
export const Admin = () => {

   const [admin,setAdmin] =useState({
        employee_name:"",
        employee_id:"",
        salary:"",
        image:"",
        username:"",
        password:"",
        task:"",
   })
   const adminchange=(e)=>{
       setAdmin({
           ...admin,
           [e.target.id]:e.target.value
       })
   }
const submitdata=async(e)=>{
    e.preventDefault()
    try{
        let res = await fetch("http://localhost:8080/employee", {
                    method: 'POST',
                     headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(admin)
                })
                let data = await res.json()
               console.log("Admindetails:",data) 
    }
    catch(err){
        console.log(err)
    }
}



    return (
      <form className="createEmployee">
        <input type="text" placeholder="Employee Name" onChange={adminchange} id="employee_name" />
        <input type="text" placeholder="Employee id"  onChange={adminchange} id="employee_id" />
        <select   onChange={adminchange} id="title">
          <option value="intern">Intern</option>
          <option value="Jr Software Developer">Jr Software Developer</option>
          <option value="Sr Software Developer">Sr Software Developer</option>
          <option value="Team Lead">Team Lead</option>
        </select>
        <input type="number"  onChange={adminchange} placeholder="Salary" id="salary" />
        <input type="text"  onChange={adminchange} placeholder="Image" id="image" />
        <input type="text"  onChange={adminchange}  placeholder="User Name" id="username" />
        <input type="password"  onChange={adminchange} placeholder="Password" id="password" />
        <input
          type="text"
          placeholder="Enter tasks separated by commas"
          id="tasks"
          onChange={adminchange}
        />
        <select  onChange={adminchange} 
        // name="status" 
        id="status">
          <option value="">Select Status</option>
          <option value="terminated">Terminated</option>
          <option value="working">Working</option>
        </select>
        <select  onChange={adminchange} 
        // name="team"
         id="team">
          <option value="">Select team</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="qa">QA</option>
        </select>
        <input   className="createUser" onClick={submitdata} type="submit" value={"submit"} />
      </form>
    );
  };