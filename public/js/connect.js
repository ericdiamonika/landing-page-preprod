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

fbSignIn=()=>{

    fb_provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithRedirect(fb_provider).then(function(result){
        console.log(result)
        console.log("Success..fb Account Linked")
        var token = result.credential.accessToken;
        var user = result.user;
    }).catch((function(err){
        console.log(err)
        console.log("Failed to do")
    }))
}

twitterSignIn=()=>{

    t_provider = new firebase.auth.TwitterAuthProvider()
    firebase.auth().signInWithRedirect(t_provider).then(function(result){
        console.log(result)
        console.log("Success..twitter Account Linked")
        var token = result.credential.accessToken;
        var secret = result.credential.secret;
        // The signed-in user info.
        var tuser = result.user
    }).catch((function(err){
        console.log(err)
        console.log("Failed to do")
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
    }))
}


