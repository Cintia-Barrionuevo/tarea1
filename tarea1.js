function escalera(hasta){
   
   // let n = 1;

    for (let i =1; i <= hasta; i++){
        let resultado = "";
      
       // for (let a = i; a >= n ; a--){
          for (let a =1; a <= i; a ++){
            
            resultado += a + " ";
            
        }    
            
          
      console.log( resultado);
        


    }

}

escalera(10);