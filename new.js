console.log("this is web development");

function greet(name, greetText="Greetings from Js"){
    console.log(greetText +" "+ name);
    console.log( name + " is a good boy");
}
function sum(a, b, c){
    let d = a + b + c;
    return d;
}
let name1 = "Abhirup";
let name2 = "Ayanjoti";
let name3 = "Arka";
let greetText1="Good Morning";
greet(name1,greetText1);
greet(name2,greetText1);
greet(name3);//as I haven't sent greetText1 here, so it will take The other value
let returnVal = sum(1, 2, 3);
console.log(returnVal)
// console.log( name1 + "is a good boy");
// console.log( name2 + "is a good boy");
// console.log( name3 + "is a good boy");