// false
// 0
// ""
// undefined
// null
//NaN               [Falsy]

// '0', ' '         [Truthy]
let name = 12;
if(name || name == 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}