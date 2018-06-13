googleSignIn=()=>{

    base_provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(base_provider).then(function(result){
        console.log(result)
        console.log("Success..Google Account Linked")
    }).catch((function(err){
        console.log(err)
        console.log("Failed to do")
    }))
}