function EmployeeCard({employee}){
    return(
        <div>
            <h3>
                {employee.firstName} {employee.lastName}
            </h3>

            <p>Email: {employee.email}</p>
            <p>Department: {employee.department}</p>
            <p>Salary: R{employee.salary}</p>

            <button>Edit</button>
            <button>Delete</button>
            
        </div>
    )
}
export default EmployeeCard