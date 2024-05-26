import { AppDataSource } from "./data-source"
import { Employee } from "./entity/Employee"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new employee into the database...")
    const employee = new Employee()
    employee.name = "Alex"
    employee.department = "IT"
    await AppDataSource.manager.save(employee)
    console.log("Saved a new employee with id: " + employee.employeeId)

    console.log("Loading employees from the database...")
    
    

}).catch(error => console.log(error))

