function angkaPrima(angka) {
  var result = false;

  for(var i = 2; i < angka;i++){
      if(angka % i !== 0){
          result = true
      }else{
          return false
      }
  }
  return result
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false