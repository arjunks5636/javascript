var text="this is this is java"
var words=text.split(" ")//in word:"this" "is" "this" "is" "java"


obj={}
for(let word of words){//this
    if(word in obj){
        obj[word]+=1
    }
    else{
        obj[word]=1
    }
}
console.log(obj)