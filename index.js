console.log("Hello Script")

// QuerySelectors =====================================
createButton = document.querySelector("#createButton")

apiMessage = document.querySelector("#apiMessage")

UserNameField = document.querySelector("#userName")
UserMailField = document.querySelector("#userMail")
userPasswordField = document.querySelector("#userPassword")


// Fonction d'affichage du message
function setApiMessage(message){
apiMessage.innerText = message
}





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
    .then(res => res.json())
    .then((data) => {

      console.log(data)
      setApiMessage(data.message)
      
    })




})

