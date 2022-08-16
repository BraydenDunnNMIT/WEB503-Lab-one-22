/* function convert(min){
    return mins *60;
}

console.log(convert(30));


var array= [1,2,3,4];
return array[0];
console.log(0);
//returns first numb in array

//creates a function that takes an array of objects, which will calculate the total price of a built computer

var array1=[{
    price: 100,
    name: 'Ram'
 },
 {
     price:160,
     name:'Motherboard'
 },
 {
     price:310,
     name:'CPU'
 },
 {
    price:200,
    name:'Powersupply'

 },
 {
    price:85,
    name:'case'

 }
 ]

 function pricecalc(objs){
     var sumtotal = 0
     var name = ""
     objs.forEach(obj => {
        if(name =='' ) {
            name += obj.name
        }
        else{
         name += ' + ' + obj.name 
     }})
     objs.forEach(obj => {
         sumtotal += obj.price
     })
     return 'Total price = ' + sumtotal + ' ; ' + name 
     
 }
 
 console.log(pricecalc(array1));
*/
//create a function that takes an array and returns an array with strings that have digits. 
//example: arr([1a, "abc", Ali ])

var array1=[{
    digit:0,
    name:'string0'
 },
 {
     digit:1,
     name:'string1'
 },
 {
     digit:2,
     name:'string2'
 },
 {
    digit:3,
    name:'string3'

 },
 {
    digit4:4,
    name:'string4'

 }
 ]

 function digits(objs){
     var digittotal = 0
     var name = " "
     if(name =='' ) {
        name += obj.name
    }
    objs.forEach(obj => {
        digittotal += obj.digits
    })
    return 'Total digits = ' + digittotal + name 
 }
 console.log(digits(array1))

