import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const googleButton = document.querySelector('#googleLogin');

googleButton.addEventListener('click', async ()=>{
    const provider = new GoogleAuthProvider();


    try {
        const credential = await signInWithPopup(auth, provider);

        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinmodal'));
        modal.hide();

        window.location.href = './dashboardPrincipal.html';

        showMessage('Bienvenido ' + credential.user.displayName, 'success');

    } catch (error) {
        console.log(error)
    }
})