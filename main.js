

//discount coupon, div 50% which is the user has will get 10% discount else 5% discount

let num = prompt("Enter the amount");       // user input
let coupon = prompt("Enter the coupon");    //coupon is the discount coupon
let discount;
let total;

if(coupon =="DIV50") {
    discount = num*0.10;
    total = num-discount;
    console.log("The discounted price is " + total);
}

else {
    discount = num*0.05;
    total = num-discount;
    console.log("The discounted price is " + total);
}


//Arayy

//1. By using array constructor
let arr = new Array(100);

