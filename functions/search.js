var arr=[10,12,13,14,15];
var ele=12;
var flag=0;
for(let num of arr){
    if(num ==ele){
        flag=1;
        break;
    }
}
    if(flag ==1){
        console.log("print element found")
    }
    else{
        console.log("print element not found")
    }

