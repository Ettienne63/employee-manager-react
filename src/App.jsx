import { useState,useEffect } from 'react'
import './App.css'
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'

function App() {
const [employees,setEmployees] = useState([])
const [editEmployee,setEditEmployee] = useState(null)

useEffect(()=>{
  const savedEmployees = localStorage.getItem("employees")

  if(savedEmployees){
    setEmployees(JSON.parse(savedEmployees))
  }
},[])

useEffect(() => {
  localStorage.setItem(
    "employees",
    JSON.stringify(employees)
  )
}, [employees])

function addEmployee(employee) {
  if (editEmployee) {

    setEmployees(previousEmployees =>
      previousEmployees.map(emp =>
        emp.id === employee.id ? employee : emp
      )
    )

    setEditEmployee(null)

  } else {

    setEmployees(previousEmployees => [
      ...previousEmployees,
      employee
    ])

  }
}

function deleteEmployee(id) {
  setEmployees(previousEmployees =>
    previousEmployees.filter(employee => employee.id !== id)
  )

  if (editEmployee && editEmployee.id === id) {
    setEditEmployee(null)
  }
}
  return (
    <div>
        <h1>Employee Manager</h1>
        <EmployeeForm
          onSave={addEmployee}
          editEmployee = {editEmployee}/>
        <EmployeeList 
          employees = {employees}
          onDelete = {deleteEmployee}
          onEdit = {setEditEmployee}
        
        />
    </div>
  )
}

export default App
