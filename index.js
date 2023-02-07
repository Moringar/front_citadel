console.log("Hello Script")


createButton = document.querySelector("#createButton")

userData = {
    "pseudo" : "thename",
    "mail" : "email@email.com",
    "password" : "thepassword"
}

createButton.addEventListener("click", ()=>{
    console.log("BUTTON CLICK")

    fetch('http://chaos_citadel.test/user/create', {
        mode: "no-cors",
        method: 'POST', // or 'PUT'
        body: JSON.stringify(userData),
      })
      .then((data) => {
        console.log('Success:', data);
      })


})

