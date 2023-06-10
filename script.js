function showData() {
  document.getElementById("balance-amount").innerHTML =
    localStorage.getItem("Total-Amount");
  document.getElementById("amount").innerHTML =
    localStorage.getItem("Total-Amount");
  var data = JSON.parse(localStorage.getItem("expenses"));
  data.map((item) => {
    var list = document.getElementById("list")
    document.getElementById("expenditure-value").innerHTML = item.userAmount;
    list.innerHTML += `
    <div class="sublist-content">
    <p class="product">${item.productTitle}</p><p class="amount">${item.userAmount}</p>
    
    </div>
    `;  
  });
}

showData();
function setBudget() {
  showData();
  var tomatal_amount_length =
  document.getElementById("total-amount").value.length;
  if (tomatal_amount_length === 0) {
    document.getElementById("budget-error").classList.remove("hide");
  } else {
    document.getElementById("budget-error").classList.add("hide");
    var total_ammount = document.getElementById("total-amount").value;
    localStorage.setItem("Total-Amount", total_ammount);
    document.getElementById("balance-amount").innerHTML =
      localStorage.getItem("Total-Amount");
    document.getElementById("amount").innerHTML =
      localStorage.getItem("Total-Amount");
    var total_ammount = document.getElementById("total-amount").value === "";
  }
}

function setExpense() {
  showData();
  var product_title = document.getElementById("product-title").value;
  var user_amount = parseInt(document.getElementById("user-amount").value);
  var totalAmount = parseInt(localStorage.getItem("Total-Amount"));
  console.log(totalAmount > user_amount);
  if (user_amount > totalAmount) {
    alert("Total Amount is short ");
  } else {
    var product_title_error = document.getElementById("product-title-error");
    if (product_title.length === 0 || user_amount.length === 0) {
      product_title_error.classList.remove("hide");
    } else {
      product_title_error.classList.add("hide");
      var expenses = JSON.parse(localStorage.getItem("expenses")) || [];
      var obj = {
        productTitle: product_title,
        userAmount: user_amount,
      };
      expenses.push(obj);
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }
}


