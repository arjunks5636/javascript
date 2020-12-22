var arr=[1,2,3,4,6]
var low=0;
var upp=arr.length-1;
var element=6;
while(low<upp){
    let total=arr[low]+arr[upp];
    if(totlal>element){
        upp=upp-1
    }
    else if(total<element){
        low=low+1;
    }
}