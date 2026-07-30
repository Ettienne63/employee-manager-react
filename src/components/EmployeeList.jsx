function EmployeeList({ employees }) {
    return (
        <div>
            <h2>Employees</h2>

            {employees.map((employee, id)=> (

                <div key={employee.id}>
                    {employee.firstName} {employee.lastName}
                </div>

            ))}
        </div>
    )
}

export default EmployeeList