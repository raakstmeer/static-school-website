let form = document.querySelector(".form");
let username = document.querySelector("#username");
let password = document.querySelector("#password");

form.addEventListener('submit',(event) => {
  event.preventDefault();

  let messageU = username.value ? "":"E-mail is required";
  let messageP = password.value ? "":"Password is required";

  if(messageU || messageP){
    document.querySelector("#usernameMess").innerHTML = messageU;
    document.querySelector("#passwordMess").innerHTML = messageP;
  }else{

    let databaseMail = "demo@gmail.com";
    let databasePass = "1234";

    if(databaseMail === username.value && databasePass === password.value){
      document.querySelector("#homePage").setAttribute("href","../index.html");
    }else{
      let x = databaseMail !== username.value ? "Your Mail is Wrong":" ";
      let y = databasePass !== password.value ? "Your Password is Wrong":" ";

      document.querySelector("#usernameMess").innerHTML = x;
      document.querySelector("#passwordMess").innerHTML = y;

    }
  }


})


function showPassword(){
  document.querySelector("#hidePass").style.display = "none";
  document.querySelector("#showPass").style.display = "initial";
  document.querySelector("#password").setAttribute("type","text");
}

function hidePassword(){
  document.querySelector("#showPass").style.display = "none";
  document.querySelector("#hidePass").style.display = "initial";
  document.querySelector("#password").setAttribute("type","password");
}