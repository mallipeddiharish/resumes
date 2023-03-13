let studentDetailsContainerEl = document.getElementById("studentDetailsContainer")

let studentDeatilsEl = document.getElementById("studentDeatils");
let teacherDetailsEl = document.getElementById("teacherDetails");
let feeDetailsEl = document.getElementById("feeDetails");


let nameEl = document.createElement("h1");
let studentId = document.createElement("p")
let dateOfJoin = document.createElement("p")
let teacherName = document.createElement("p")
let feeEl = document.createElement("p")


studentDeatilsEl.onclick = function() {
    studentDetailsContainerEl.classList.add("main-container")
    let studentCardContainerEl = document.getElementById("studentCardContainer");
    studentCardContainerEl.classList.add("card-container")
    nameEl.textContent = "Mallipeddi Harish"
    nameEl.classList.add("name")
    studentCardContainerEl.appendChild(nameEl);

    studentId.textContent = "student id :- 12";
    studentId.classList.add("student-id")
    studentCardContainerEl.appendChild(studentId)

    dateOfJoin.textContent = " date of join :- 10-3-2023";
    dateOfJoin.classList.add("age")
    studentCardContainerEl.appendChild(dateOfJoin)

    teacherName.textContent = "Teacher Name :- Ravi sir"
    teacherName.classList.add("from");
    studentCardContainerEl.appendChild(teacherName);

    feeEl.textContent = "balance fee : - 28000"
    feeEl.classList.add("fee");
    studentCardContainerEl.appendChild(feeEl)

}



teacherDetailsEl.onclick = function() {
    studentDetailsContainerEl.classList.add("main-container")
    let studentCardContainerEl = document.getElementById("studentCardContainer");
    studentCardContainerEl.classList.add("card-container")
    nameEl.textContent = "Ravi sir"
    nameEl.classList.add("name")
