console.log("Hello Script")

// QuerySelectors ==============================================
// User Creation
createButton = document.querySelector("#createButton")
UserNameField = document.querySelector("#userName")
UserMailField = document.querySelector("#userMail")
userPasswordField = document.querySelector("#userPassword")

// User authentification
authButton = document.querySelector("#authButton")
UserNameFieldAuth = document.querySelector("#userNameAuth")
UserMailFieldAuth = document.querySelector("#userMailAuth")
userPasswordFieldAuth = document.querySelector("#userPasswordAuth")



// Api text response display
apiMessage = document.querySelector("#apiMessage")


// Fonction d'affichage du message
function setApiMessage(message){
apiMessage.innerText = message
}




// Eventlistener CREATION
createButton.addEventListener("click", ()=>{

    console.log("BUTTON CLICKED")


    // Sets inputs values into the userData Object
    userData = {
      // "pseudo" : UserNameField.value,
      // "mail" : UserMailField.value,
      // "password" : userPasswordField.value
    }

    // Fetches the user/create URL
    fetch('http://chaos_citadel.test/user/create',
    {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(userData),
    })
    // Turns the response into Json
    .then(res => res.json())

    .then((data) => {

      console.log(data)
      setApiMessage(data.message)
      
    })
})

// Eventlistener AUTHENTIFICATION
authButton.addEventListener("click", ()=>{

    console.log("BUTTON CLICKED")


    // Sets inputs values into the userData Object
    userData = {
      "pseudo" : UserNameFieldAuth.value,
      "password" : userPasswordFieldAuth.value
    }

    // Fetches the user/create URL
    fetch('http://chaos_citadel.test/user/authenticate',
    {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(userData),
    })
    // Turns the response into Json
    .then(res => res.json())

    .then((data) => {

      console.log(data)
      setApiMessage(data.token)
      
    })
})

