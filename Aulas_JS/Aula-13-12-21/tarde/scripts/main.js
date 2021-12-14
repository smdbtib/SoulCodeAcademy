console.log("Vamos que Vamos!");

const myForm = document.forms.myForm;
const nickNames = ["samu","samuka","samuca","sam","smdb"];

myForm.addEventListener("submit", function(e){
  e.preventDefault();
  let valid = true;

  // VALIDATE NICK NAME
  const smallNickName = myForm.nickName.nextElementSibling; 

  if(myForm.email.value.includes(nickNames)){
    myForm.nickName.classList.add("invalid");
    smallNickName.innerHTML = "Nick name exist!";
    
  }else{
    myForm.nickName.classList.remove("invalid");
    smallNickName.innerHTML = "";
  }

  // FULL NAME
  const smallName = myForm.fullName.nextElementSibling; 

  if(myForm.fullName.value.split(" ").length <= 1){
    myForm.fullName.classList.add("invalid");
    smallName.innerHTML = "Incomplete name!";
    
  }else{
    myForm.fullName.classList.remove("invalid");
    smallName.innerHTML = "";
  }

  // EMAIL
  const smallEmail = myForm.email.nextElementSibling; 

  if(!myForm.email.value.includes("gmail")){
    myForm.email.classList.add("invalid");
    smallEmail.innerHTML = "invalid email!";
    
  }else{
    myForm.email.classList.remove("invalid");
    smallEmail.innerHTML = "";
  }

  // PASSWORD
  const smallPassword = myForm.password.nextElementSibling; 

  if((myForm.password.value.length < 8) &&  (myForm.password.value !== myForm.password2.value)  ){
    myForm.password.classList.add("invalid");
    smallPassword.innerHTML = "Password to short";
    
  }else{
    myForm.password.classList.remove("invalid");
    smallPassword.innerHTML = "";
  }
  //Task 002: Crie outro campo de senha e valide se os dois são iguais
  const smallPassword2 = myForm.password2.nextElementSibling; 

  if(myForm.password.value !== myForm.password2.value){
    myForm.password2.classList.add("invalid");
    smallPassword2.innerHTML = "Diferent password";
    
  }else{
    myForm.password2.classList.remove("invalid");
    smallPassword2.innerHTML = "";
  }
});

/*
  Task 001: Coloque o atributo required nas tags input
  Task 002: Crie outro campo de senha e valide se os dois são iguais
  Task 003: Criar um campo nick, criar no JS um vetor pré-definido de nicks
            e verificar se já existe.
  Desafio: Reduzir o código das validações.
 */
  //Task 001: Coloque o atributo required nas tags input
 


  //Task 002: Crie outro campo de senha e valide se os dois são iguais VIDE LINHA 44


