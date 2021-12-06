// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     var user = firebase.auth().currentUser;

//     if (user != null) {
//       var email_id = user.email;
//       let successText = document.getElementById('success-text');
//   successText.innerHTML = "welcome user: " + email_id;
//     }
//   }
// })

// function login() {
//   const x = document.getElementById("signIn");

//   let userEmail = x.elements.item(1).value;
//   let userPass = x.elements.item(2).value;

//   firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
//     // var errorCode = error.code;
//     var errorMessage = error.message;

//     window.alert("error: " + errorMessage);
//   });

// }

(function () {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBmciGUxy1VP3d98THVjaJpKSY9noOxfJY",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Get Elements
  

  

  if(document.getElementById("btnLogin")){
    let btnLogin = document.getElementById("btnLogin");
  

  //Add Login Event
  btnLogin.addEventListener("click", (e) => {

    const x = document.getElementById("signIn");

    let email = x.elements.item(0).value;
    let password = x.elements.item(1).value;

    console.log(email);

    const auth = firebase.auth();

    //sign in with firebase auth
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        alert("Login Successful :)");
      })
      .catch((err) => {
        alert(err.message);
      });
  });
  }

  //Add Signup Event
  if (document.getElementById("btnSignup")) {
    let btnSignup = document.getElementById("btnSignup");
    btnSignup.addEventListener("click", (e) => {
      const x = document.getElementById("signUp");
  
      //get email and password
      let email = x.elements.item(0).value;
      let password = x.elements.item(1).value;
  
      const auth = firebase.auth();
  
      //sign in with firebase auth
      const promise = auth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          alert("Signup Successful :)");
        })
        .catch((err) => {
          alert(err.message);
        });
    });
  }
})();
