const PIN = 123456;
var balance = 5000;
var init_bal = balance;

function deposit() {
  let pin = parseInt(prompt("Enter your PIN number : "));
  if (pin === PIN) {
    alert("Verified Succesfully");
    let amount = parseInt(prompt("Enter the amount to deposit : "));
    if (amount <= 0) {
      alert("Please, enter a valid amount");
      deposit();
    } else {
      balance += amount;
    }
    document.getElementById("div1").style.display = "block";
    document.getElementById(
      "p1"
    ).innerHTML = `<b>A/c Holder Name</b> : I-Tech Computer Education`;
    document.getElementById(
      "p2"
    ).innerHTML = `<b>A/c Number</b> : 5265 8798 5478`;
    document.getElementById(
      "p3"
    ).innerHTML = `<b>Amount Deposited</b> : ₹ ${amount}`;
    document.getElementById(
      "p4"
    ).innerHTML = `<b>Your initial balance was</b> : ₹ ${init_bal}`;
    document.getElementById(
      "p5"
    ).innerHTML = `<b>Your current balance is</b> : ₹ ${balance}`;
    init_bal = balance;
  } else {
    alert("Invalid PIN number");
  }
}

function withdraw() {
  let pin = parseInt(prompt("Enter your PIN number : "));
  if (pin === PIN) {
    alert("Verified Succesfully");
    let amount = parseInt(prompt("Enter the amount to withdraw : "));
    if (amount <= 0) {
      alert("Please, enter a valid amount\n");
      withdraw();
    } else if (amount > balance) {
      alert("You cannot withdraw requested amount\n");
      withdraw();
    } else {
      balance -= amount;
    }
    document.getElementById("div1").style.display = "block";
    document.getElementById(
      "p1"
    ).innerHTML = `<b>A/c Holder Name</b> : I-Tech Computer Education`;
    document.getElementById(
      "p2"
    ).innerHTML = `<b>A/c Number</b> : 5265 8798 5478`;
    document.getElementById(
      "p3"
    ).innerHTML = `<b>Amount Withdrawn</b> : ₹ ${amount}`;
    document.getElementById(
      "p4"
    ).innerHTML = `<b>Your initial balance was</b> : ₹ ${init_bal}`;
    document.getElementById(
      "p5"
    ).innerHTML = `<b>Your current balance is</b> : ₹ ${balance}`;
    init_bal = balance;
  } else {
    alert("Invalid PIN number");
  }
}

function checkbal() {
  let pin = parseInt(prompt("Enter your PIN number : "));
  if (pin === PIN) {
    alert("Verified Succesfully");
    document.getElementById("div1").style.display = "block";
    document.getElementById(
      "p1"
    ).innerHTML = `<b>A/c Holder Name</b> : I-Tech Computer Education`;
    document.getElementById(
      "p2"
    ).innerHTML = `<b>A/c Number</b> : 5265 8798 5478`;
    document.getElementById(
      "p3"
    ).innerHTML = `<b>Your current balance is</b> : ₹ ${balance}`;
    document.getElementById("p4").innerHTML = ` `;
    document.getElementById("p5").innerHTML = ` `;
  } else {
    alert("Invalid PIN number");
  }
}