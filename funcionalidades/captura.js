const nameLogin = document.getElementById("userName");

const btnLogin = document.getElementById("btnLogin");


btnLogin.addEventListener('click',()=>{

  const nameP = nameLogin.value

  localStorage.setItem("nombre", nameP);
  // console.log(nameP);

})