var tweets=[
         "sachin,tweet1",
         "sachin,tweet2",
         "dhoni,tweet1",
         "dhoni,tweet2",
         "dhoni,tweet3",
         "sanju,tweet1",
         "kohli,tweet1"
]
var obj={}
for(tweet of tweets){
    let name=tweet.split(",")[0];
    if(name in obj){
        obj[name]+=1
    }
    else{
        obj[name]=1
    }
}console.log(obj)
