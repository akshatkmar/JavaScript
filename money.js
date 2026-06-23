let totalExpense = 0;

function addExpense() {
  let name = document.getElementById("expenseName").value;
  let amount = document.getElementById("expenseAmount").value;

  if (name === "" || amount === "") {
    alert("Please enter all fields");
    return;
  }

  amount = Number(amount);

  let li = document.createElement("li");

  li.innerHTML = `
        ${name} - ₹${amount}
        <button class="delete-btn">Delete</button>
    `;

  document.getElementById("expenseList").appendChild(li);

  totalExpense += amount;
  document.getElementById("total").innerText = totalExpense;

  li.querySelector("button").addEventListener("click", function () {
    totalExpense -= amount;
    document.getElementById("total").innerText = totalExpense;

    li.remove();
  });

  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
}
