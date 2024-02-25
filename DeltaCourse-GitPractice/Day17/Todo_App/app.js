let todo = [];

let req = prompt("Please enter your request");

while (true) {
  if (req == "qt") {
    console.log("quitting app");
    break;
  }

  if (req == "li") {
    console.log("________________");
    for(let i = 0; i < todo.length; i++){
        console.log(i, todo[i]);
    }
    console.log("_______________");
  } else if (req == "add") {
    let task = prompt("please enter the task you want to add");
    todo.push(task);
    console.log("Task added");
  } else if(req == "del"){
    let idx = prompt("please enter the task index");
    todo.splice(idx, 1);
    console.log("Task deleted");
  }else{
    console.log("Wrong request");
  }

  req = prompt("please enter your request")
  }

