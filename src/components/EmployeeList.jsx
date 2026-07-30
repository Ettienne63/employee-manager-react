import EmployeeCard from "./EmployeeCard"

function EmployeeList({ employees }) {
    return (
        <div>
            <h2>Employees</h2>

            {employees.map(employee=> (

                <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    />

            ))}
        </div>
    )
}

export default EmployeeList