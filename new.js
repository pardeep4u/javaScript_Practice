console.log("Connected!");
// Write a JavaScript function that reverse a number

function reverse_number(n){ 
    n = n + "";
    console.log("The number is " + n);
    return n.split("").reverse().join("");
}

console.log("Rversed number is " + reverse_number(12345));

// Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function palindrome(params=String) {
    
    if(params.length > 2){
        var last = Math.floor(params.length / 2);
        for(var i = 0 ; i <= last ; i++ ){
            
            if(params[i] === params[params.length - (1 + i)]){
                if(i === last){
                    return "Yes it is palindrome";
                }
            }else{
                return "No";
            }
            
        }

    }else if(params.length === 2){

        if(params[0] === params[1]){
            return "Yes!";
        }else{
            return "No!";
        }

    }else{
        return "Bhenchod! lenght increase kar!";
    }

}

console.log("The String is palindrome " + palindrome("nursesrun"));

/*

Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
Example string : 'webmaster'
Expected Output : 'abeemrstw'

*/

function order(inp = String){

    console.log("Entered string is " + inp);
    return inp.split("").sort().join("");

}

console.log("Alphbetical order is " + order("dcba"));


/*

Write a JavaScript function that accepts a string as a parameter and find the longest word within the string

*/

function longest_word(par = String) {
    var word;
    var arr = par.split(" ");
    for(var i = 0;i < arr.length ; i++){
        
        for(var j = 0; j < arr.length ; j++){

            if( arr[i].length < arr[j].length ){
                word = arr[j];
                break;
            }

        }
    }
    return word;


}

console.log("Longest word is " + longest_word("Web developmenthdfjshdfhkjshfjkhsfhjkasdhfkjahskjdfhakhdsf Tutorial adfsdfdjfjasdf asdfsyudgfusudfhsudfhuasdhfui hsdhfuishdfuihuisdhfuihasuhfuhsdfhui"));




/*

Write a JavaScript function to get the function name

*/

function get_function_name(par=String,ann=String) {
    return get_function_name.name + " " + get_function_name.arguments;
}

console.log(" Function name is " + get_function_name("sourav","Pardeep"));



// Write a JavaScript function to find longest substring in a given a string without repeating characters















