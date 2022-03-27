function Pizza(name, size, toppings, crust, pizzaPrice) {
    var name = $("select#type").val();
    var size = $("select#size").val();
    var toppings = $("select#toppings").val();
    var crust = $("select#crust").val()
    this.name = name
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
    this.pizzaPrice = 0;





    if (size === "small")
        this.pizzaPrice = 5;
    else if (size === "medium")
        this.pizzaPrice = 10;
    else if (size === "large")
        this.pizzaPrice = 15;
    //}

    if (this.name === "vegie") {
        this.pizzaPrice += 10;
    } else if (this.name === "meatlover") {
        this.pizzaPrice += 15;
    } else if (this.name === "pepperoni") {
        this.pizzaPrice += 20;
    }

    if (this.crust === "thin") {
        this.pizzaPrice += 1;
    } else if (this.crust === "thick") {
        this.pizzaPrice += 2;
    }


    if (this.toppings === "cheese")
        this.pizzaPrice += 2;
    else if (this.toppings === "sauce")
        this.pizzaPrice += 3;
    else if (this.toppings === "pineapple")
        this.pizzaPrice += 4;
    else if (this.toppings === "chicken")
        this.pizzaPrice += 5;
    else if (this.toppings === "pepper")
        this.pizzaPrice += 6;
    else if (this.toppings === "parsely")
        this.pizzaPrice += 7;
    else if (this.toppings === "mince")
        this.pizzaPrice += 8;
    else if (this.toppings === "ranch")
        this.pizzaPrice += 2;

    document.getElementById("tprice").innerHTML = this.pizzaPrice
    return this.pizzaPrice;

}
$("#sub").click(function(e) {
    e.preventDefault();

});