import { useEffect, useState } from "react"

function EmployeeForm({ onSave, editEmployee }) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [department, setDepartment] = useState("")
    const [salary, setSalary] = useState("")

    useEffect(() => {

        if (editEmployee) {

            setFirstName(editEmployee.firstName)
            setLastName(editEmployee.lastName)
            setEmail(editEmployee.email)
            setDepartment(editEmployee.department)
            setSalary(editEmployee.salary)

        }

    }, [editEmployee])

    function handleSubmit(event) {
        event.preventDefault();

        const employee = {
            id: editEmployee ? editEmployee.id : Date.now(),
            firstName,
            lastName,
            email,
            department,
            salary
        }

        onSave(employee)
        setFirstName("")
        setLastName("")
        setEmail("")
        setDepartment("")
        setSalary("")

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Employee</h2>

            <div>
                <label>First Name</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(event) => {
                        setFirstName(event.target.value)
                    }}
                />
            </div>

            <div>
                <label>Last Name</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(event) => {
                        setLastName(event.target.value)
                    }}
                />
            </div>

            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value)
                    }}
                />
            </div>

            <div>
                <label>Department</label>
                <select
                    id="departmentSelect"
                    value={department}
                    onChange={(event) => {
                        setDepartment(event.target.value)
                    }}>
                    <option value="">Select Department</option>
                    <option value="finance">Finance</option>
                    <option value="admin">Admin</option>
                    <option value="hr">HR</option>
                </select>
            </div>

            <div>
                <label>Salary</label>
                <input
                    type="number"
                    value={salary}
                    onChange={(event) => {
                        setSalary(event.target.value)
                    }}
                />
            </div>

            <div>
                <button type="submit">
                    Save Employee
                </button>
            </div>
        </form>
    )
}
export default EmployeeForm