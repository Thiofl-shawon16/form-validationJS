function validate(){

 let name= document.myform.name.value;
 let email=document.myform.email.value
 let password=document.myform.password.value

 let regx=/^([a-zA-z0-9\.-]+)@([a-zA-z0-9-]).([a-z]+).([a-z]+)$/;//email er jonno 

 //username varifaction
 if (name =='' || name.length <=5 || isNaN(name)==false ){
document.querySelector("#nm").style.visibility='visible'

return false;
  
}


//password varification
else if (password =='' || password.length <6){
  document.querySelector("#mn").style.visibility='visible'

  return false;
  
}
//email validation subidhar jonno last a korchi
else if(email==''){
  document.querySelector("#mnm").style.visibility='visible'
  return false
}
else if(email.match(regx)){
  alert('right')
}
else{
  document.querySelector('#mnm').innerHTML='email not valid'
  document.querySelector("#mnm").style.visibility='visible'
   return false
}


}