alert("Welcome to my Website! CAN I KNoW SMTH ABOUT YOU")
let myname = prompt("Your Name! Please!")
alert("THANKS " + myname)
document.getElementById("myname").innerHTML = "Your Name: " +  myname;


let myage = prompt("Your Age! Please!")
alert("THANKS !!!")
document.getElementById("myage").innerHTML = "Your Age: " +  myage;

let adress = prompt("Your Addres! Please!")
alert("THANKS !!!")
document.getElementById("adress").innerHTML = "Place That You Live: " +  adress;

btn.addEventListener('click', () =>{
    alert("YOUR BIRTH YEAR!!!!!🤓")
    let now = ("2022")
    document.getElementById("btn").innerHTML = now -  myage;
});

