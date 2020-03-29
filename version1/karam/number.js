function number(){
    for (i=1; i<100; i++){
       
        if(i%3==0 && i%5==0){
            console.log("Jackpot!")
        }if (i%3==0){
            console.log("multiple of 3")
        }else if(i%5==0){
            console.log("This is a multiple of 5")
        }
    }
} 
number()



