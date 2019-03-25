function kaliTerusRekursif(angka) {
    // you can only write your code here!
    
    if (angka>=0 && angka<10){
        return angka;
    }
    else{
        var a=1,b=angka;
        for (var i=0;i<String(angka).length;i++){
            a*=(b%10);
            b=Math.floor(b/10);
        }
        return kaliTerusRekursif(a);
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6