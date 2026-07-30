import EmployeeCard from "./EmployeeCard"

function EmployeeList({ employees , onDelete}) {
    return (
        <div>
            <h2>Employees</h2>

            {employees.map(employee=> (

                <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    onDelete={onDelete}
                 />

            ))}
        </div>
    )
}

export default EmployeeList