var a = 10;
let b = 11;
const c = 12;

function par() { 
    console.log(a,b,c);
    b = 13;
    {
        let d = 14;
    }
    
}
par()

console.log(b);