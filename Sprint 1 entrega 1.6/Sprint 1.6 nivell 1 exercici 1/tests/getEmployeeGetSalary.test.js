const {getEmployee, getSalary }= require('../app/getEmployeeGetSalary.js');

describe("getEmployee() function tests:", () => {
    test("getEmployee(1) should return employee object with id 1", async () => {
        const employee = await getEmployee(1);
        expect(employee).toEqual({id: 1, name: 'Linux Torvalds'});
    });
  
    test("getEmployee(5) should return 'Employee with id 5 was not found'", async () => {
        try {
            await getEmployee(5);
        } catch (error) {
            expect(error).toBe("Employee with id 5 was not found");
        }
    });
});