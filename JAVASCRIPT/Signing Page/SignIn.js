function display2(){
    var student2 = JSON.parse(localStorage.getItem('newstudent'))
    for (let index = 0; index < student2.length; index++) {
        var userEmail = student2[index].email
        var userPassword = student2[index].password
        console.log(signInEmail.value, signInPassword.value)
        if (signInEmail.value == userEmail && signInPassword.value === userPassword){
            alert("Your code is perfectly working")
            window.location.href = 'Dashboard.html'
        } else {
            alert("Invalid")
        // if (signInEmail.value == userEmail && signInPassword.value === userPassword){

        }
    }
}
