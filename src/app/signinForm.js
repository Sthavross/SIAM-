import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const loginform = document.querySelector('#login-form');
// const loginemail = document.querySelector('#login-email')
// const loginpassword = document.querySelector('#login-password')

loginform.addEventListener('submit', async (e)=>{
    e.preventDefault();

   const email = loginform['login-email'].value;
   const password = loginform['login-password'].value;

   try {
    const userCredential = await signInWithEmailAndPassword(auth,email, password);
    const signinmodal = document.querySelector('#signinmodal');
    const modal = bootstrap.Modal.getInstance(signinmodal);
    modal.hide();

    window.location.href = './dashboardPrincipal.html';
    showMessage("Bienvenido!" + " " + userCredential.user.email)


   } catch (error) {

         if(error.code === 'auth/wrong-password'){
            showMessage("Contraseña Incorrecta","error")
        }else if(error.code === 'auth/user-not-found'){
            showMessage("Usuario no encontrado", "error")
        }else if(error.code === 'auth/invalid-credential'){
            showMessage("El usuario o la contraseña son incorrectos", "error")
        }
    
   }
})