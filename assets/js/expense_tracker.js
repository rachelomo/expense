// const options = document.querySelector('cursor');

// document.addEventListener(mousemove, (e) => {
//   cursor.style.left = e.clientX + 'px';
//   cursor.style.top = e.clientY + 'px';
// });



let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById("Category_select");
const amountAmount = document.getElementById("Category_amount");
const categoryDate = document.getElementById("Category_date");
const addBtn = document.getElementById("Addbtn");
const tableBody = document.getElementById("table_body");
const total_amount = document.getElementById("total_amount");

addBtn.addEventListener("click", function () {
  const category = categorySelect.value;
  const amount = Number(amountAmount.value);
  const date = categoryDate.value;

  if (category == "") {
    alert("Please select a Category");
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount");
  }

  if (date == "") {
    alert("Please select a date");
  }

  expenses.push({ category, amount, date });
  totalAmount += amount;
  total_amount.textContent = totalAmount;

  const newRow = tableBody.insertRow();

  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    expenses.splice(expenses.indexOf(expense), 1);

    totalAmount -= expense.amount;
    total_amount.textContent = totalAmount;

    tableBody.removeChild(newRow);
  });

  const expense = expenses[expenses.length - 1];
  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
});

for (const expense of expenses) {
  totalAmount += expense.amount;
  total_amount.textContent = totalAmount;

  const newRow = tableBody.insertRow();

  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    expenses.splice(expenses.indexOf(expense), 1);
    totalAmount -= expense.amount;
    total_amount.textContent = totalAmount;

    tableBody.removeChild(newRow);
  });

  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
}




