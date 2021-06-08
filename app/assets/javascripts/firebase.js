const auth = firebase.auth();
auth.signInWithEmailAndPassword(email, pass);
auth.createUserWithEmailAndPasswords(email, pass);
auth.onAuthStateChanged(firebaseUser => {});

//Get Elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const txtPassword2 = document.getElementById('txtPassword2');
const btnLogin = document.getElementById('btnLogin');
const btnSignup = document.getElementById('btnSignup');
const btnLogout = document.getElementById('btnLogout');

//Add Login Event
btnLogin.addEventListener('click', e => {
	//Get email and pass
	const email = txtEmail.value;
	const pass  = txtPassword.value;
	const auth  = firebase.auth();
	//SignIn
	const promise = auth.signInWithEmailAndPassword(email, pass);

	promise.catch(e => console.log(e.message));

});
