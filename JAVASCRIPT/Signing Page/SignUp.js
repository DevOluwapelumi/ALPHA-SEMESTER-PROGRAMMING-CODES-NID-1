
var allStudent = []
function display() {
    if (first.value == "" || last.value == "" || email.value == "" || password.value == "") {
        alert("Please input the student details...");
    } else {
        var student = {
            firstname: first.value,
            lastname: last.value,
            email: email.value,
            password: password.value
        }
        if (localStorage.getItem('newstudent')) {
            var newStudent = JSON.parse(localStorage.getItem('newstudent'))
            newStudent.push(student)
            localStorage.setItem('newstudent', JSON.stringify(newStudent))
        } else {
            allStudent.push(student)
            localStorage.setItem('newstudent', JSON.stringify(allStudent))
        }
        window.location.href = 'SignIn.html'
    }
}

