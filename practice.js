console.log("welcome!");

// First question
/* 

Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38

*/
/*

var today = new Date();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log(`Today is : ${daylist[today.getDay() - 1]}`);

var dn = today.getHours() > 12 ? "PM" : "AM";

console.log(`Current time is : ${today.getHours()} ${dn} : ${today.getMinutes()} : ${today.getSeconds()}`);


/*

Write a JavaScript program to print the contents of the current window

*/

/*
console.log(window.print());
*/

/*

Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"

*/
/*
var ran = Math.random();
ran = (ran * 10) + 1;
ran = Math.floor(ran);
console.log(ran);
/*
var inp = prompt("Enter any Number");
inp == ran ? console.log("oh yes") : console.log("oh no");

*/
/*
var d = new Date(2022,0,2);
console.log(d.getMonth(),d.getDate(),d.getDay());


/*

get document URL 

*/
/*
console.log(document.URL);

var filename = "19bcs1896.pdf";
var check = filename.split(".");

console.log(filename.split(".").pop());

/*

Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

*/
/*
var nick = "Pyring";
var check = nick.substring(0,2);
console.log(check);
if(nick.substring(0,2) === "Py"){
    console.log("its Py");
}
else{
    console.log("no its no Py");
}

var gs = "now let's see";
var rew = gs.replace("w","o");
console.log(rew);


console.log(gs.length);
console.log(gs[1]);
var arrr = gs.split("");
var qq = arrr[arrr.length - 1];
arrr[arrr.length - 1] = arrr[0];
arrr[0] = qq;

console.log(arrr.join(""));


/* new */
/*
var ss = "TESTING";
var tt = "sourav";
console.log( ss.slice(1)+tt.slice(1) );
var last = tt.substring(tt.length,tt.length- 3);
console.log(last + tt[2][4]);

*/




function Question(que,opt,corOption){
    this.que = que;
    this.opt = opt;
    this.corOption = corOption;

    return {
        que,opt,corOption
    }
}


var que1 = new Question("what is my name",{"1" : "sourav","2" : "pardeep"},1);
var que2 = new Question("what is my career",{"1" : "SWD","2" : "WD"},2);
var que3 = new Question("what is my future",{"1" : "Good","2" : "Bamb , execellent , awesome , No-stress"},2);

var bundle = [que1,que2,que3];



function printq(obj,num){
        var ques = obj.que;
        var option = obj.opt;
       // var answer = obj.corOption;
        console.log(num + " " + ques);
        for (const property in option) {
            console.log(`${property}: ${option[property]}`);
          }
}


function game(bundle) {
    var count = 1;
    var score = 0;
    var gameon = true;
    
    while(gameon){
        var ran = Math.floor((Math.random() * 3) + 1);
        
        printq(bundle[ran],count);
        count++;
        var val = prompt("Enter the answer");
        if(val === "exit"){
        
            console.log(" Thanks for playing");
            gameon = false;
    
        }else{
            val = parseInt(val);
            if(val === bundle[ran].corOption){
                console.log("correct option");
                score++;
                console.log("score is " + score);
                console.log("-----------------------------------------");
               
            }
            else{
                console.log("Wrong answer");
            }
        }
    }
        


    
}



game(bundle);





















