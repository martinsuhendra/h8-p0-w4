function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    var result = [];

    for(var i = 0; i < arrPenumpang.length;i++){
        var obj = {
            penumpang : arrPenumpang[i][0],
            naikDari : arrPenumpang[i][1],
            tujuan : arrPenumpang[i][2],
        }
        var naikDarimana = 0;
        var turunDimana = 0;
        for(var j = 0; j < rute.length;j++){
            if(obj.naikDari === rute[j]){
                naikDarimana = j
            }else if(obj.tujuan === rute[j]){
                turunDimana = j
            }
        }
        obj.bayar = Math.abs(naikDarimana - turunDimana) * 2000 ;
        result.push(obj)
    }
    return result;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]