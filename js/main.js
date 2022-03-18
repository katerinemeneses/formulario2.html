const form = document.querySelector( "form" )

form.addEventListener( "submit", event => {
    console.log( "ejecucion del evento" )
    leerFormulario( event )

} )

function leerFormulario(event) {
    //getElementById solo puede usarse sobre el document

    let userName = document.getElementById( "username" ).value
    let email = document.getElementById( "email" ).value
    let password = form.querySelector( "#password" ).value

    let userData = {
        userName: userName ,
        email: email,
        password: password
    }


    enviarInformacion( JSON.stringify( userData )  )

    event.preventDefault()
}

function enviarInformacion( data ){
    fetch( "baseURL/register", {
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json' 
        },
        body: data
    })
    .then( response => response.json() )
    .then( data => console.log( data ) )
    .catch( error => alert( error ) )
}