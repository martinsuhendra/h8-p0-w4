function checkAB(num) {
    
    var indeksOfA = [];
    var indeksOfB = [];

    for(var j = 0; j < num.length;j++){
        if(num[j] === 'a'){
            indeksOfA.push(j);
        }else if(num[j] === 'b'){
            indeksOfB.push(j);
        }
    }
        
        if(indeksOfA.length === undefined || indeksOfB.length === undefined){
            return false;
        }else if(Math.abs(indeksOfA[indeksOfA.length - 1] - indeksOfB[indeksOfB.length - 1]) === 4){
            return true;
        }else{
            return false;
        }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false