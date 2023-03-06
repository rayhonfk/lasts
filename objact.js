///////////// 1. 03 //////
//////////// Objacts => bir nechta malumotlar toplamini key  va value  korinishida saqlashi  mumkin bolgan malumot hisoblanadi.


// let objName = {
//     name: "Jasur",
//     address: "Tashkent",
//     email: "example@gmail.com",
//     tel: 9798554955,
// }
// //console.log(objName.address, objName.email);
// console.log(objName["name"]);


//objact xossalarini olish
// objact xossalarini olishning  2 hil usuli bor.
//1) console.log(objname.address, objname.email);
//2) console.log(objname["name"]);


//nested objact//
// let objName  = {
//     name:"Jasur",
//     address:{
//         city:"Tashkent",
//         viloyat:"Tashkent",
//         street:"naqqoshlik",
//     },
//     email:"example@gmail.com",
//     tel:9798554955,
// }
// console.log(objName.address.viloyat);

// ///////////////////////////////////////////////////////
// let arr = [
//     [1,2,3,4],
//     [2,3,4,6],
//     [45,56,67,0]
// ]
// console.log(arr[2][2]);

//// misol
// let arr = [
//     {id: 1, age: 23, name: "Davron", address: "tashkent"},
//     {id: 2, age: 19, name: "botir", address: "Samarqand"},
//     {id: 3, age: 22, name: "Rashid", address: "Jizzax"},
//     {id: 4, age: 16, name: "Islom", address: "Buxoro"},
//     {id: 5, age: 21, name: "Ilyoz", address: "Namangan"},
//     {id: 6, age: 20, name: "Hasan", address: "Andijon"},
// ]


// //   for (let i = 0; i < arr.length; i++) {
// //      if (arr[i].age >= 20) {
// //          console.log {arr[i].name} $
// //          {arr[i].address} $
// //          {arr[i].id};
// //      }
// //  }



// function onSearch(x) {
//     let arr2 = arr.filter((val=> val.name.toLowerCase()) || val.name.toUpperCase().includes(x.toUpperCase()));
//      return arr2; 
// }

//  let a = onSearch("t");
//  console.log(a);



//////// 3. 03 /////

//misol
// let arr = ["test", 12, 22, "best", "school", "snow", 29, "rain"];
// let arr2 = [];
//  for (let i = 0; i < arr.length; i++); {
//       if (i % 2 == 0) {
//          arr.push(arr[i]);
//         // arr.splice(i ,1);
//       }
//     }
//  let arrr = arr.filter((val, inx) => inx % 2 != 0);
//  let result = arrr.concat(arr)
// console.log(arr);
// console.log(arr);