// js me do paet hote hai es5 and es6 :
// es5 purani js ka part hota hai or es6  nayi js ka part hai old version
// ham es5 or es6 dono ko hi use krte hai aj ke time pr  : new version


// es5 contains : var only 
// es6 contains : let const  only

// differneced between var and let :
// var : es5 ka part hota hai , function scoper variable hota hai , apne aapko window mei add krta hai 

// let : es6 ka part hota hai, braces scoped hota hai , apne ko window me add nhi krta hai let variable

function name(){
    var a = 1;
    console.log("value of a is ", a);
    for(var i = 1; i<11; i++){
        console.log(i)
    }

    console.log(i) // var se jab variable banate hai toh fucntion ke andar kahi pe bhi use krskte hai apn log usko
}
name();

// let const new js ke part hai yeh , let hota hai braces scoped variable banane ka tareeka


function abcd(){
    for(let i = 1; i<6; i++){
        console.log(i)
    }
}
abcd();

// const ek constant banane ka tarreeka hota hai  jisko ham change nhi krskte ek baar initialise krne ke baad

function constants (){
    const name = "syed samd ali";
    name = "syed arham ali";
    console.log(name)

}
constants()

// brownser context api : browser context api ek tareeka hot hai jisme kuch cheezein use krskte hai browser se jo js ka part nhi hai fir bhi 


// browser context api contains three things : window object , strack , heap memory 
//1: window object
// 2: stack
// 3: heap memory


//1:  window object: 
// js me kuch cheezein nahi hai jo ham use krskte hai woh sabhi cheezein hame js se nhi balki browser se milti hai , aise saare features jo js ke part nhi hai pr phir bhi ham use krskte hai js mein woh sabhhi features hame ek object se milti hai jis object me bht saare features hote hai , us box of features ko window kehte hai js mein


// window mein bht saare features hote hai jese ki setInterval ,settimeout, alert, prompt, local storage etc bht saare features hame milti hai window se box of features


// 2: stack : stack bhi browser context api ka part hota hai 
//  stack hota hai variables ko store krna ka tareeka memory mein
// stack : jo varaiable pehele banege woh pehle store hoga stack mein , or jo pehel banega wohi pehele out bhi yah free hoga memory se  in the form of stack 

 
// 3: heap memeory : heap memeory bhi browser  context api ka part hota hai , 

// jitne bhi variables yah data ham banate hai unhe kahi toh store krna padhta hoga memory mein , jese ki ham jo bhi temorary basis pe mind se kuch stored krte hai usi tarah computer pe temporray basis pe variable bante hai woh heap memory me store hote hai 

// 6 +10
// 3+3 +4
// 1+2 +3 + 4


// vvimpt topic : Execution context  in js

// exexution context : exexution context mtlb jab bhi ham koi function chalayenge tab function apna khudka ek imaginary container bana lega jisme container me usko teen cheezein hongi :

// variables, functions inside that function, lex or lexical environment 

// is imaginary container ko kehte hai exexution context js mein 

// exexution context basically ek container banta hai whenever we envoked or call a function it contains threee things variables, function inside that functions, lexical environment.....


function abcdef(){
    var a  = 12;
    var b = 23;
    let c = 100;

    function def(){
        var d = 90;
        console.log("definite function ");
    }

}
abcdef();

// is upar wale function ke exexution context mein , jo direct function ke andar jo variables honge woh include honge, eg a, b ,c or isme is function ke andar jitne bhi function honge woh ajayenge  jese def function par use def function ke variables nhi ayenge or use accesss nhi krskte ho, or lexical environment mtlb kisko access krskte ho us funtion me or kisko nhi 


// lexical environment: lexical environment basically hota hai  ek chart  jisme likha rehta hai ki aap particular function ke cheezon ko access krskte ho, or particular cheezon ko nhi access krskte ho mtlb it holds its function scope and scope chain 


// how to actual copy of reference type data type.
// ismein ham array or object dono ke liye actual copy krskte hai  using spread operatore 


var a = 12;
var b =  a;
// yeh actual copy hoti hai primitive data type ke andar 
// par reference tyme mein actual copy nhi hoti ek reference pass hota hai isllieye spread opertor ka use hita hai

var arr1 = [1,2,3,4,5];
var arr2 = [...arr1]
console.log(arr2)


var obj = {
    name: "samad",
    age: 20,

}

var copyobj = {...obj}
console.log(copyobj)

// js me jo bhi likho yah toh woh truthy ko belong kregi yah falsy ko

// truthy and falsy values : js mei aap kuch bhi likho  woh generrally do me se ek type ko hi belong krti hogi yah toh true  yah toh false ..

// esi condition likhi jo ab na toh true me convert horhi hai yah na toh false me convert horhi toh woh values truthy or falsy  ko belong krengi ..

// falsy values contains : document.all NaN undefined, null , o, "",  yeh sab falsy nature ki hoti hai inko chodke sab value truthy nature ko belong krti hai done hero...

// "" NAN null undefined doucument.all 0 

if(-1){
    console.log("helllllo")

}

else{
    console.log("hiiiii")
}



if(""){
    console.log("fasksy value hai")
}

else{
    console.log("fasly value ni hai sahab ")

}


// foreach: foreach ek method hoti hai jo sirf array pe loop krti hai or jitne members hote hai array me utni baar chalti hai sird 

// foreach by default array me changes nhi krti hai yeh ek temorary copy banaate hai array ki uspe changes krta hai  jiski wajah se main array pe koi bhi changes nhi krta 


var arr = [1,2,3,4,5]
arr.forEach(function(elem){
    console.log(elem)
})


// map: map bhi ek method hota hai jo sirf array pe hi chlti hai , map ek purane array me se map krke kuch bhi calculation krvana ho agar woh toh calculations krek ek new array me map krke save krdeta hai or by default array me koi bhi changes nhi krta 

// map return krta hai ek new array ko  

// map return krta hai kyoki ek naya array create hota hai
/// map : map ka matlab array ek ek member pe koi calculation krni ho toh us calcualion ko ek  naye array me save krnna ho toh map method use kra skte hai 

// [1,2,3,4,5]  = adding two in every elements of array  [ 3,4,5,6,7,]

// map basicallly tb use me ata  hai jab apko ek ek member pe koi calculation yah changes krna ho or uska resultant answe ek new array me save hojata hai return hoke

// map me return krna compusory jo new array ko leke ayega phir use baad me kisis variable me save krskte hai 



var arraaay = [1,2,3]
var ans  = arraaay.map(function(val){
     return  val + 2;
})
console.log("array after mapping is ", ans)



// filter js me map ke bhai jesa hota hai jo filter krta jata hai array me se kisi bhi true condition ki basis pe or us filte kre hue array ko new array me save krta jata  jataa hai 

/// filter bikul mao ki tarah hota hai bas filter return krta hai boolean value ko.


var  arrrrrrrr2  = [ 1,2,3,4,5,,6,12,14,16,18,20,22,23,24,10]
var answer  = arrrrrrrr2.filter(function(elem){
        elem%2 === 0;
         return true;
})

console.log(answer)



// reduce method me bad 2 value pass krne  padhti hai accumulator or curentvalue ..

// reduce react bht use hita hai , reduce basucally poori array ko reduce krdeta ek single value mein
//  isme do paramters hota hai accumulator and curentvalue accumulator resultant ko save krta hai  or curentvalue har value ko loop krta hai 

// accumulator woh hota hai jo value ko jayza krta hai stored krte  hue chalta hai 
// current value array me current value ko read krte rehta hai  
// yeh array ko reduce krne ke kaam ata hai 

var numbers = [1,2,3,4,5]

 var output = numbers.reduce(function(accumulator, curentvalue){

    return  accumulator =  accumulator + curentvalue;

}, 0)
console.log(output)


