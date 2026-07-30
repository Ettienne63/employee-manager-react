function EmployeeCard({employee,onDelete}){
    return(
        <div>
            <h3>
                {employee.firstName} {employee.lastName}
            </h3>

            <p>Email: {employee.email}</p>
            <p>Department: {employee.department}</p>
            <p>Salary: R{employee.salary}</p>

            <button>Edit</button>
            <button onClick={()=> onDelete(employee.id)}>Delete</button>
            
        </div>
    )
}
export default EmployeeCard