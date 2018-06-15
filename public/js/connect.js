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

twitterSignIn=()=>{

    t_provider = new firebase.auth.TwitterAuthProvider()
    firebase.auth().signInWithPopup(t_provider).then(function(result){
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

/*emailSignIn=()=>{

    var actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be whitelisted in the Firebase Console.
        url: 'https://htaginstitute-preprod.firebaseapp.com/',
        // This must be true.
        handleCodeInApp: true,
        iOS: {
            bundleId: 'https://htaginstitute-preprod.firebaseapp.com/'
        },
        android: {
            packageName: 'https://htaginstitute-preprod.firebaseapp.com/',
            installApp: true,
            minimumVersion: '12'
        }
    };
    const promise = auth().sendSignInLinkToEmail(email, actionCodeSettings)
    .then(function(result){
        window.localStorage.setItem('emailForSignIn', email);
        console.log(result)
        console.log("Success..Email Account Linked")
    }).catch((function(err){
        console.log(err)
        console.log("Failed to do")
    }))
}*/
