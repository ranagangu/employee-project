let employees = [];
let idCounter = 1;

const nameInput = document.getElementById("name");
const professionInput = document.getElementById("profession");
const ageInput = document.getElementById("age");
const addBtn = document.getElementById("addEmployeeBtn");
const employeeList = document.getElementById("employeeList");
const message = document.getElementById("message");
const employeeCount = document.getElementById("employeeCount");

function renderEmployees() {
  employeeList.innerHTML = "";
  employeeCount.textContent = employees.length;

  employees.forEach(employee => {
    const div = document.createElement("div");
    div.className = "employee-card";
    div.innerHTML = `
      <strong>Name:</strong> ${employee.name} <br>
      <strong>Profession:</strong> ${employee.profession} <br>
      <strong>Age:</strong> ${employee.age} <br>
      <button onclick="deleteEmployee(${employee.id})">Delete</button>
    `;
    employeeList.appendChild(div);
  });
}

function showMessage(text, type) {
  message.textContent = text;
  message.className = type;
}

addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const profession = professionInput.value.trim();
  const age = ageInput.value.trim();

  if (!name || !profession || !age) {
    showMessage("Error: All fields are required!", "error");
    return;
  }

  const newEmployee = {
    id: idCounter++,
    name,
    profession,
    age: parseInt(age)
  };

  employees.push(newEmployee);
  renderEmployees();
  showMessage("Success: Employee added!", "success");

  // Clear form
  nameInput.value = "";
  professionInput.value = "";
  ageInput.value = "";
});

function deleteEmployee(id) {
  employees = employees.filter(emp => emp.id !== id);
  renderEmployees();
  showMessage("User deleted successfully", "success");
}
