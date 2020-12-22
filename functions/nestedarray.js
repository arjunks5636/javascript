var emp=[
    [100,"ajay","dev",25000],
    [101,"akhil","dev",25000],
    [102,"jay","qa",25000],
    [103,"ajay","qa",25000]

]
    
    for(let emmp of emp){
        console.log(emmp[0]);
    }
    var total=0;
    for(let emmp of emp){
        total=total+emmp[3];
       
    }
    console.log(total);
