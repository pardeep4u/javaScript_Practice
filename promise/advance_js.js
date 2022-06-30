var getname = document.querySelector("#name");
var resultbar = document.querySelector('#resultbar');
var rgender = document.querySelector("#gender");
var rprob = document.querySelector("#prob");
var imgg = document.querySelector(".imgg");

const pro = async (naem) => {

    var info = await fetch(`https://api.genderize.io?name=${naem}`); 
    var data = await info.json(); // Always promise
    console.log(info);
    console.log(data);

    return data; // Always asyn function return promise 

}

const proi = async () => {

    var info = await fetch(`https://dog.ceo/api/breeds/image/random`); 
    var data = await info.json(); // Always promise
    console.log(info);
    console.log(data);

    return data; // Always asyn function return promise 

}

async function clicked(){

    console.log(getname.value);
    let gender = pro(getname.value);
    let op = proi();
    
    await gender.then( (data) => { 
        console.log(data); 
        rgender.innerHTML = data.gender;
        rprob.innerHTML = data.probability;
        

    }).catch( ()=> {  console.log("error"); });

    await op.then( (data)=>{
        imgg.innerHTML = `<img src="${data.message}" alt="">`;
    }).catch( ()=> {  console.log("error"); })

    
    resultbar.style.display = "block";




}




