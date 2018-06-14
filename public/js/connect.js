googleSignIn=()=>{

    base_provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(base_provider).then(function(result){
        console.log(result)
        console.log("Success..Google Account Linked")
    }).catch((function(err){
        console.log(err)
        console.log("Failed to do")
    }))
}

fbSignIn=()=>{

    fb_provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(fb_provider).then(function(result){
        console.log(result)
        console.log("Success..fb Account Linked")
        var token = result.credential.accessToken;
        var user = result.user;
    }).catch((function(err){
        console.log(err)
        console.log("Failed to do")
    }))
}

