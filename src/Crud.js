

import React,   {Component}  from 'react'  
import AddUserForm from './Forms/AddUserForm'


//
const Msg = () => {
  return <div>Student List</div>
}
//

const TableHeader = (props) => {
  return (
   
      <div id='head'>
        

         <div id='formblanket'>
      <AddUserForm  addUser={props.addUser} />

      </div>

      <Msg />
      <tr>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Action</th>
        </tr>
     
    </div>
  )
}//End TableHeader

const TableRow = (props) => {
  //
  const rows = props.characterData.map((row, index) => {
    const { id, fName,  lName,  age, birthDay,  country, city } = row;
    return (
      <div id='frame'>

      

      <tr key={row.id}>
        
        
         <td>{row.id}</td>
        <td>{row.fName}</td>
        <td>{row.lName}</td>
        <td>{row.age}</td>
        <td>{ props.TableAction(row)}</td>
         <td> <button
                onClick={() => props.deleteUser(row.id)}
                
              >
                Delete
              </button></td>
      </tr>
       </div>
    )
  })
  
  return  <tbody>{rows}</tbody>;
  
    }//End TableRow


class Crud extends Component {  
  render() { 
    
   // const {characterData} = this.props  //update data
    const {characterData,TableAction,deleteUser,addUser} = this.props  //update&recive  data

    return (
      <div>
    <table>
    
    <TableHeader addUser={addUser}/>
    <TableRow characterData={characterData} 
      TableAction={TableAction}
      deleteUser={deleteUser}
      
      />
    </table>
    <br />
   {this.props.ShowStudentDetails()}
    </div>
    
    )
  }  
}  
export default Crud