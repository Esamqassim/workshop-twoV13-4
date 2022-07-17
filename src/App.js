
import { Route,Routes,Link, BrowserRouter as Router } from 'react-router-dom' 
import About from './About'
import Home from './Home'
import Person from './Person'
import Wellcome from './Wellcome'
import Crud from './Crud'
import React,  { useState } from 'react';
import AddUserForm from './Forms/AddUserForm'

import ReactDOM from 'react-dom/client';

const App = () => {

  //Start  Initail data
  const studentList =  [{id:0,
    fName: 'Charlie',  lName: 'Jan',  age:'20', birthDay: 'Sun',  country: 'USA', city:'DC'
  },
   {  id:1,   fName: 'Char',    lName: 'Jank',    age:'25' , birthDay: 'Sun',  country: 'USA', city:'DC' 
    }, 
   {   id:2,   fName: 'Chlie',    lName: 'Jano',  age:'30', birthDay: 'Sun',  country: 'USA', city:'DC'
  },   
  ]
  
  const [users, setUsers] = useState(studentList); 
  const [showDetails, setShowDetails] = useState(false);//Edit
  const studentDefaultData = {id:null, fName: '',    lName: '',  age:'', birthDay: '',  country: '', city:''}
   const [student, setStudent] = useState(studentDefaultData);//setCurrent
 

 //CRUD operations start 

 const deleteUser = id => {
  setShowDetails(false)

  setUsers(users.filter(user => user.id !== id))
}

//Add user
const addUser = (user) => {
  user.id = users.length + 1
  setUsers([...users, user])
}
 //start Deils
  // functionconponent action 
  const TableAction = (student ) => {//({student}) this cause many problem to me!
    const displayData = () => {
        setShowDetails(true);
       
        setStudent(student);//Does not work, since passing data is not properly if using ({student})!
     
       
    };
    return <button type="button" className="btn btn-primary" onClick={displayData} >Details</button>
}//End   functionconponent action 

// functionconponent 
const ShowStudentDetails = () => {
  const { id, fName,  lName,  age, birthDay,  country, city } = student;
  return (
      <>
          {showDetails &&
              <div className="card" style={{ width: '400px' }} >
                  <div className="card-header bg-info text-white">
                      Student Information
                  </div>
                  <div className="card-body">
                      <h5 className="card-title"> {country}: {city}</h5>
                      <p className="card-text">ID: {id}</p>
                      <p className="card-text"> age: { age}</p>
                      <p className="card-text">Name: {fName} {lName}</p>
                      <p className="card-text">BirthDate: {birthDay}</p>
                  </div>
                  <div className="card-footer">
                      <button type="button" className="btn btn-info" onClick={() => { setShowDetails(false); setStudent(studentDefaultData) }}>Hide info</button>
                  </div>
              </div >
          }
      </>
  )
}// functionconponent 
//End Details
  return (
    <div className="container">
      
   <Router>
   
     
    <nav>
   
      <ul>
      <li>
        <Link to="/wellcome">React</Link>
        </li>
        <li>
        <Link to="/home">Home</Link>
        </li>
        <li>
        <Link to="/person">Person</Link>
        </li>
        <li>
                <Link to="/about">About</Link>
        </li>

        <li>
                <Link to="/crud">Crud</Link>
        </li>
      </ul>
     
    </nav>
      <Routes>
      
      <Route path="about" element={<About />} />
      <Route path="home" element={<Home />} />
      <Route path="person" element={<Person />} />
      <Route path="wellcome" element={<Wellcome />} />
     
      <Route path="crud" element={<Crud characterData={users} 
                                    ShowStudentDetails={ ShowStudentDetails} 
                                  TableAction={TableAction} 
                                  deleteUser={deleteUser}
                                  addUser={addUser}
                                  />} />
      </Routes>
     
  </Router>  
 
    </div>  
    

 
  )
}


export default App;
