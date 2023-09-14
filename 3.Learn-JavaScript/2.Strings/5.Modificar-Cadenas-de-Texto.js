/*  */


let n = [11,1,7,4,32]

for (let index = 0; index < n.length; index++) {
     let x = (n[index]).toString(2);
     
     let c = 0, d = 0;
     while( x != 0){

          d = x % 10;
          x = Math.round(x/10);
          if(d == 1){
               c = c+1;
          }
     }
     console.log(c)
}
