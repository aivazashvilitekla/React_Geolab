const signUp = () => {
    const x = document.getElementById("signUp");
    const storedUser = localStorage.getItem('email');


    let signUpName = x.elements.item(0).value
    let signUpEmail = x.elements.item(1).value
    let signUpPassword = x.elements.item(2).value

    if(signUpEmail === storedUser){
      alert('Email Address is Already Registered');
    }
    else{
      const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   const rePass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

      if ( reEmail.test(String(signUpEmail)) ) {
          localStorage.setItem('user', signUpName);
          localStorage.setItem('email', signUpEmail);
          localStorage.setItem('password', signUpPassword);
          
        //   window.location.replace('./index.html');
        document.getElementById('signUp').reset();
        let successText = document.getElementById('success-text');
          successText.innerHTML = "Registration was Successful";
          setTimeout(function(){
            successText.remove();
          }, 3000);
      }
    }
}
  
const signIn = () => {
    const x = document.getElementById("signIn");

    const signInEmail = x.elements.item(0).value;
    const signInPassword = x.elements.item(1).value;

    const storedUser = localStorage.getItem('email');
    const storedPass = localStorage.getItem('password');

    console.log(localStorage.getItem('email'));
    if(signInEmail === storedUser && signInPassword === storedPass) {
      window.location.replace('./success.html');
    }
    else { 
      const inp = document.getElementById('email');
      const pass = document.getElementById('password');
        inp.style.border = "1px solid red";
        pass.style.border = "1px solid red";
    }
  }