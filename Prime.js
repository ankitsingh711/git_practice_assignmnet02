function is_prime(num){
    let fact = 0;
    for(let i=1; i<num; i++){
        if(i % num == 0){
            fact++;
        }
    }

    if(fact == 2){
        return true;
    }
    return false;
}

let result = is_prime(19)

if(result == true){
    console.log("Prime Number");
} else{
    console.log("Not a Prime Number");
}