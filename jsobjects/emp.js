var employee={
    eid:100,
    name:"john",
    desig:"dev",
    salary:25000
}
console.log("gender" in employee)//check for gender key is there

employee["gender"]="male"//add gender:male key valye pair
employee.salary+=5000;// add 500 more rs to salary
for(let k in employee){
    console.log(k,",",employee[k])
}