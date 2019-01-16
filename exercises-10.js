function changeMe(arr) {
    var obj;
    var count = 1;
    
    for(var i = 0; i < arr.length;i++){
        
        var age = 2019 - arr[i][3];
        if(arr[i][3] === undefined){
            age = 'Invalid Birth Year';
        }
        obj = {
            'firstname' : arr[i][0],
            'lastname' : arr[i][1],
            'gender' : arr[i][2],
            'age' : age
            }
            console.log(count + '. ' + obj.firstname + ' ' + obj.lastname);
            console.log(obj);
            count++

    }
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""