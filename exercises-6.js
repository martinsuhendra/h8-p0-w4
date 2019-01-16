function digitPerkalianMinimum(angka) {
    
    var result = [] 
    
    
    for(var i = 1; i <= angka;i++){
        var string = '';
        if(angka % i === 0){
            var hasil = angka / i
            string += i;
            string += hasil;
            result.push(string);
        }
    }

    var digitMinimum = result[0].length;
    for(var j = 1; j < result.length;j++){
        if(result[j].length < digitMinimum){
            digitMinimum = result[j].length;
        }
    }
    return digitMinimum;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2