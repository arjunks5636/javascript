var arr=[10,"hello",10.5,1,2,3]//we can store any type of objectsd
// there is no size limit
//console.log(arr)
//console.log(arr[0])
// array iteration
for(let data of arr){
    console.log(data)
}
//adding an oblect to an array
arr.push(500)
console.log(arr)
// for deleting an object
arr.pop()
console.log(arr)
arr.splice(1,2)//remove items 
console.log(arr)
