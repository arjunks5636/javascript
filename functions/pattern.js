var arr=[4,3,6]
var total=0;
//sum=4+3+6=13
//13-9=9
//13-3=10
//13-6=7
for(let num of arr){
    total=total+num
}
for(let num of arr){
    console.log(total-num)
}
