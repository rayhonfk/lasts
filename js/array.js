// //array
// // 1 misol
// let arr = [39, 7, 12,  77, 45, 5, 23, 55, 9, 2, 7];
// // console.log(arr);

// //2
// arr.pop();
// arr.pop();
// // console.log(arr);

// //3
// arr.push(555, 777);
// // console.log(arr);

// //4
// arr.unshift(14, 01);
// // console.log(arr);

// //5
// arr.pop();
// // console.log(arr);

// //6
// arr.shift();
// arr.shift();
// arr.shift();
// // console.log(arr);

// //7
// arr[5] = "0"
// // console.log(arr); 

// //////////////////////////////////////////////
// let arr1 = [39, 7, 12, 77, 45, 5, 23, 55, 9, 2, 7];
// let arr2 = ["Temur", "Rashid", "Jasur"];
// // console.log(arr1);
// // console.log(arr2);
// let lastArr = arr1.concat(arr2);
// console.log(lastArr);



// let arr = ["Temur", "Rashidjon", "Jasur"];


// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);





//uyga vazifa
// let arr = [4, 8,"olma", "limon", true, 12, false, 9, "anor", "mandarin"];
// let s = 0;
// for (let i = 0; i < arr.length; i++) {
//     if ( typeof arr[i] == "number") {
//         s += arr[i];
//     }
// }
// console.log(s);



//misollar 
// let arr = [4,15,2,"limon", true, 12, false, true, null, undefined, 30, "anor", 45, 15, "mandarin"]
// let s = 0;
// function findResult() {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] == "number" &  arr[i] % 3 == 0 & arr[i] % 5 == 0)
//         s += arr[i]
//     }
//     return s;
// }
// findResult(arr);
// console.log(s);



// let arr = [4, 15, 2, "limon", true, 12, false,true, null, undefined,  30, "anor", 45, 15, "mandarin"]
// while (arr.length > 9 ) {
//     arr.pop();
// }
// console.log(arr);







/////////////24.02//////////

//1 misol
// let arr = ["olma", 8, "behi", true, "limon", false, "olcha", "anor" ,"olxori",  12]
//  for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "string" & arr[i][0] == 'o') {
//      arr.splice(i, 1);
// }
// }

// console.log(arr);




//2 misol
// let arr = ["olma", 8, "behi",45,  "limon", false, 11, "olcha", 21,  12 ]
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number") {
//         arr2.push(arr[i]);
//     }
// }
// arr2.sort((a, b) => a - b);
// arr2.reverse();
// console.log(arr2);

//////////find    ///////////  faqat bitta element chiqaradi.
// let arr = [1, 3, 1, 4, 18, 10];
// let result = arr.find((val, inx) => val % 2 == 0 &&  val % 3 == 0);
// console.log(result); 



////// filter  ////////// 
 //let arr = [1, 3, 1, 4, 18, 10, 36];
  //let result = arr.filter((val, inx) => val % 2 == 0 && val % 3 == 0);
  //console.log(result);

// /////////////split
//  let str = "this is a car";
//  a = str.split(" ")
//  console.log(a);


// ///////join
//  let b = a.join("/");
//  console.log(b);


 ///////map
//let arr = [1,2, 3, 4, 5,6]
//let newarr = arr.map((val,inx) => `${val} ning indexi ${inx} ga teng`)
//console.log(newarr);

//////////////////////////////////////////////////////////////////////////////////////////
                    //27.02
// 1 misol  manashu array ichidagi  5ta belgidan kop bolgan stringlarni chiqarib bersin array methodlaridan foydalanib.
// let arr = ["olma", "behi", "anorlar", "limonlar", true,false, "tarvuzlar", 12, 16]
// let result = arr.filter((val, inx) => val.length > 5);
// console.log(result);

// 2 misol  mana shu array ichidagi  elementlarni har birini tipi bn birga chiqarsin.
//let arr = ["olma", "behi", "anorlar", "limonlar", true, false, "tarvuz", 12, 16]
//a = arr.map((val, inx) => val +  typeof val);
//console.log(a);

// 3 misol  ushbu array ichidagi birinchi kelgan  uzunligi 8 ga teng bolgan element topilsin.
//let arr = ["olma","brhi", "anorlar", "limonlar", true, false, "tarvuz", 12, 16]
//let result = arr.filter((val, inx) => val.length  > 8);
//console.log(result);



// misol 4  mana shu stringni har bir sozini array ichiga  alohida  element qilib joylab ,va hosil bolgan arrayni teskari  tartibda  joylashtirib bitta stringga yig'in.
//let str = "This is my favourite IT Course";
//a = str.split(" ").reverse();join /
//console.log(a);
//let str = "Course IT favourite my is this";
//arr.reverse();
//console.log(arr);


// 5 misol  ushbu array ichidagi birinchi o bn boshlangan va tipi  number bolgan  elementlarni ochirsin
// let  arr = ["olma","behi", "anorlar", "limonlar", true, false, "tarvuz", 12, 16]
// let arr2 = arr.filter(val => typeof val != "number" && val [0] != "o");
// console.log(arr2);


//includes()///




////////////28.02
                          /// map ///
//let b = [1, 2, 3, 4, 5]
//let a = b.map((val,inx) => `${val} ${val % 2 == 1 ? "toq": "juft"}`);    ------ 1 usuli
//let a = b.map((val,inx) => `${val} ${val % 2 == 0 && "juft" || "toq"}`);    -------- 2 usuli
//console.log(a);


// let a = 12;
// let b = 1
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);


  

