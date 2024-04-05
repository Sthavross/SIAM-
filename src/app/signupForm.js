import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const signupform = document.querySelector('#signup-form');
// const loginemail = document.querySelector('#login-email')
// const loginpassword = document.querySelector('#login-password')

signupform.addEventListener('submit', async (e)=>{
    e.preventDefault();

   const email = signupform['login-email'].value;
   const password = signupform['login-password'].value;

   console.log(email, password)

   try {
    const userCredential = await createUserWithEmailAndPassword(auth,email, password);
    console.log("Usuario registrado correctamente:", userCredential.user);

    const signupmodal = document.querySelector('#signupmodal');
    const modal = bootstrap.Modal.getInstance(signupmodal);
    modal.hide();

    window.location.href = './dashboardPrincipal.html';
    showMessage("Bienvenido!" + " " + userCredential.user.email, "success")


   } catch (error) {

         if(error.code === 'auth/email-already-in-use'){
            showMessage("El correo ya está en uso","error")
        }else if(error.code === 'auth/weak-password'){
            showMessage("La contraseña es muy debil", "error")
        }else if (error.code === 'auth/invalid-email'){
            showMessage("El correo no es valido", "error");
        }else if(error.code){
            showMessage(error.message, "error")
        }
    
   }
})