import { useState } from 'react'
import './App.css'
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'

function App() {
const [employees,setEmployees] = useState([])

function addEmployee(employee){
  setEmployees(previousEmployees => [
    ...previousEmployees,
    employee
  ])
}

function deleteEmployee(id){
  setEmployees(previousEmployees =>
    previousEmployees.filter(employee => employee.id !== id)
  )
}
  return (
    <div>
        <h1>Employee Manager</h1>
        <EmployeeForm onSave={addEmployee}/>
        <EmployeeList 
          employees = {employees}
          onDelete = {deleteEmployee}
        
        />
    </div>
  )
}

export default App
