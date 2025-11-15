document.getElementById("loginBtn").onclick = () => {
    const email = prompt("Enter email:");
    const pass = prompt("Enter password:");

    auth.createUserWithEmailAndPassword(email, pass)
        .then(user => {
            alert("Registered!");

            // پرداخت ۲ دلار
            alert("You must pay $2 to unlock the game.");
            db.collection("users").doc(user.user.uid).set({
                money: 0,
                currentLevel: 1
            });

            document.getElementById("auth-screen").style.display = "none";
            document.querySelector("canvas").style.display = "block";
        })
        .catch(() => {
            auth.signInWithEmailAndPassword(email, pass)
                .then(() => {
                    document.getElementById("auth-screen").style.display = "none";
                    document.querySelector("canvas").style.display = "block";
                });
        });
};
