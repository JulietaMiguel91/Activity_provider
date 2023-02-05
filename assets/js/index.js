const Chekacount =document.querySelector("#credit_account_id");
const value =document.querySelector("#value");
$("#buscar").on("click", function(){
let id =Chekacount.value();
let value=value.value();
console.log(Chekacount.value);
const options ={
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    params:{credit_account_id:id, }
}
 fetch(`https://credibank.intsis.utad.pt:8080/check/${credit_account_id}/ammount/${value}`) 
  .then ((response) => { response.json()
   .then( data => console.log(data))
})
.catch( e => console.log('Deu Erro:' + e,message))
    

    document.getElementById("novoEl").innerHTML += `<div class="form-row">      
     <div class="col-xs-12 col-sm-2">
       
         <label class="control-label"><span class="text-danger">* </span> Chek </label><br>
         <input type="text" id="checkID" class="form-control"><br>
         </div>
         </div> 
         <div class="form-row"> 
         </div> <div class="col-xs-12 col-sm-3">
         <label class="control-label"><span class="text-danger">* </span> Data </label><br>  
         <input type="date" id="id" class="form-control"></div>
         </div> 

  <div class="row">
  <div class="text-center">
  <button type="submit" class="btn btn-success" id="Registar">Gravar</button> 
  </div>
  `;
 });