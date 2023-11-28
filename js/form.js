signIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}

signUp.onclick = function() {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit",e=>{
    e.preventDefault();
    let warnings = "";
    let entrar=false;
    parrafo.innerHTML="";
    let emailval=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if(nombre.value.length<6){
        warnings += 'El nombre no es valido <br>';
    }
    if(!emailval.test(email.value)){
        warnings += 'El email no es valido <br>';
        entrar=true;
    }
    if(pass.value.length<8){
        warnings += 'La contraseña no es valida <br>';
        entrar=true;
    }
    if(entrar){
        parrafo.innerHTML=warnings;
    }
})
