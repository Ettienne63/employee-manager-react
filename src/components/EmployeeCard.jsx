function EmployeeCard({employee,onDelete,onEdit}){
    return(
        <div>
            <h3>
                {employee.firstName} {employee.lastName}
            </h3>

            <p>Email: {employee.email}</p>
            <p>Department: {employee.department}</p>
            <p>Salary: R{employee.salary}</p>

            <button onClick ={() => onEdit(employee)}>Edit</button>
            <button onClick={()=> onDelete(employee.id)}>Delete</button>
            
        </div>
    )
}
export default EmployeeCard