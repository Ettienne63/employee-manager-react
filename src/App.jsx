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
  return (
    <div>
        <h1>Employee Manager</h1>
        <EmployeeForm onSave={addEmployee}/>
        <EmployeeList employees = {employees}/>
    </div>
  )
}

export default App
