let todo = []; 

let req = prompt("Please enter your request");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }

    if(req == "list"){
        console.log("________________");
        for(task of todo){
            console.log(task);
        }
    console.log("_______________");
    }else if(req == "add"){
        prompt("Please enter your name :");
    }
}