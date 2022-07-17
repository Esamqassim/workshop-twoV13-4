import React, { useState } from 'react'

const AddUserForm = (props) => {

  const initialFormState = { id: null, fName: '',  lName: '',  age:'',   country: '', birthDay: ''}
const [user, setUser] = useState(initialFormState)

//update state
const handleInputChange = (event) => {
  const { name, value } = event.target

  setUser({ ...user, [name]: value })
}

  return (
    <form 
    onSubmit={event => {
      event.preventDefault()
      if (!user.fName||!user.lName) return

      props.addUser(user)
      setUser(initialFormState)
    }}
    >
      <label>First Name</label>
      <input type="text" name="fName" value={user.fName} onChange={handleInputChange}/>
      <label>Last Name</label>
      <input type="text" name="lName" value={user.lName} onChange={handleInputChange}/>
      <br></br>
      <label>Age</label>
      <input type="text" name="age" value={user.age} onChange={handleInputChange}/>
      <label>Country</label>
      <input type="text" name="country" value={user.country} onChange={handleInputChange}/>
      <label>Date of birth</label>
      <input type="text" name="birthDay" value={user.birthDay} onChange={handleInputChange}/>
      <br></br>
      <button id='addbtn'>Add new user</button>
      
    </form>
  )
}

export default AddUserForm