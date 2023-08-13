
var local = JSON.parse(localStorage.getItem('newstudent'))
console.log(local)
for (let index = 0; index < local.length; index++) {
    console.log(local)

    display.innerHTML += `
        <tr class="text-center">
            <td>${index + 1}</td>
            <td>${local[index].firstname}</td>
            <td>${local[index].lastname}</td>
            <td>${local[index].email}</td> 
            <td>${local[index].password}</td>
            <th>
                <button class="btn btn-danger my-2" onclick="deleteStudent(${index})"> Delete User</button>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning my-2" onclick="editStudent(${index})"> Edit User</button>
            </th>
        </tr>
         `
}
// var allStudent = []
// var student = {
//     firstname: first.value,
//     lastname: last.value,
//     email: email.value,
//     password: password.value
// }
// function deleteStudent(userIndex){
//     var userResponse = confirm("Are you sure? This action is irreversible!!!")
//     if (userResponse == true){
//         allStudent.splice(userIndex,1)
//         console.log(userIndex)
//         displayStudent()
//     }else{
//         if (userResponse == false)
//         allStudent.splice(userIndex,0)
//         console.log(userIndex)
//     displayStudent()
//  }
// }
    
// function editStudent(useIndex){
//     var student = {
// firstname: firstNew.value,
// lastname: lastNew.value,
// email: emailNew.value,
// password: passwordNew.value
// }
// allStudent.splice(useIndex,1,student)
// displayStudent()

// }