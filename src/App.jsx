import { useState } from 'react'
import './App.css'
import EmployeeForm from './components/EmployeeForm'

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
    </div>
    
  )
}

export default App
