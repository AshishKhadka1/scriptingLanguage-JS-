const favourateMovie = "avatar";

let guess = prompt("Guess My Favourate Movie Name :");

while (guess != favourateMovie && guess != "quit") {
  prompt("wrong guess. please try again");
}
if ((guess = favourateMovie)) {
  console.log("Congrats ");
} else {
  console.log("you quit");
}
