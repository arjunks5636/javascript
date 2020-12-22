//searching in arrays are difficult 
var students={rol:100,name:"ajay",course:"bca",total:150}
 console.log(students["name"])
 console.log(students.name)
//duplecate keys are not allowed

//oblect iteration
for(let key in students){
    console.log(key+",",students[key])
}
