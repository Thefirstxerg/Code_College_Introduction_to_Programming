// declare globals
var money = 20;
var lunches = 0;

//display lunch budget
document.getElementById("money").innerHTML = money;

//listen for order
orderButton = document.getElementById("placeOrder");
orderButton.addEventListener("click", buyLunches);

document.getElementById("placeOrder").addEventListener("click", buyLunches);


//buys specified number of sandwiches per day at current prices
function buyLunches() {
    resetForm();
    var day = 0;
    while (money > 0) {
        day++;
        var priceToday = getSandwichPrice();
        var numberOfSandwiches = document.getElementById("numSandwiches").value;
        var totalPrice = priceToday * numberOfSandwiches;


        if (money >= totalPrice) {
            money = money - totalPrice;
            lunches++;
            document.getElementById("receipt").innerHTML += "<p>On day " + day + ", sandwiches are: $" + priceToday + ". You have $" + money.toFixed(2) + " left.</p>";

        } else {
            document.getElementById("receipt").innerHTML += "<p>Today, sandwiches are: $" + priceToday + ". You don't have enough money. Maybe your sister will give you some of her sandwich.</p>";
            money = 0;
        }

    }
    document.getElementById("receipt").innerHTML += "<p>You bought " + lunches + " lunches this week.</p>";

}

//gets the current price of sandwiches

function getSandwichPrice() {
    var sandwichPrice = (Math.random() (1 - 0) + 1).toFixed(2);
    return sandwichPrice;
}

/*
resets the game so that a new order can be placed
*/
function resetForm() {
  money = 20;
  lunches = 0;
  document.getElementById("receipt").innerHTML = "";
}

//While loop example
function countUp() {
  let i = 0;
  while (i < 11) {
    i++;
    console.log(i);
  }
}
