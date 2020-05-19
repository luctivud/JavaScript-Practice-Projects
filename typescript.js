// let isDone : boolean = true
// let num: number = 54
// num = 0b1010
// // num = 'here'
// // console.log(isDone,num)
// let arr1: number[] = [1, 2]
// let arr2: Array<number> = [1, 2]
// // console.log(arr1,arr2)
// let x:[string, number, string]
// x = ['light', 20, 'evil']
// // console.log(x)
// // x = [20, 'light', 'not evil']
// // console.log(x)
// // console.log(x[0].substring(1,4))
// var a: number
// function myFunc(something: boolean){
//     if (something){
//      a = 10
//     }
//     a = 5
//     return a;
// }
// console.log(a)
// console.log(myFunc(false))
// for (/*// try using var*/let i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 100 * i);
// }
// let [first,second]:number[] = [1,2]
// first = second
// second = first
// let item : number[]= [1,2]
// let first = item[0]
// let second = item[1]
// // [first,second] = [second,first]
// console.log(first,second)
// for (var i: number = 0; i < 5; i++) {
//   (function (i){
//     setTimeout(() =>{
//       console.log(i);
//     },100 * i);
//   })(i)
// }
// for (var i = 0; i < 5; i++) {
//     (function(i) {
//         setTimeout(function() { console.log(i); }, 100 * i);
//     })(i);
// }
// for(let i=0;i<5;i++){
//   console.log(i);
// }
// console.log(i)
// let n = 0;
// for (let i = 0; n < 5; n = ++i) { 
//   console.log(i,n)
// }
// let obj = {
//   name:'helen',
//   age:10,
//   gender:'f'
// }
// let obj2 = {...obj, name:'troy',gender:'m'}
// console.log(obj2);
// let arr = [1,2,3]
// let arr1 =[8,9,10]
// let arr2 =[...arr,4,5,6,7,...arr1]
// console.log(arr2.length);
// function printLabel(labeledObj: {label: string} ) {
//     console.log(labeledObj.label);
// }
// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);
// // enum Type  {
// //   number
// // }
// function add<Type>(a:Type,b:Type){
//   return a + b;
// }
// console.log(add<string>('2','3'))
// interface Type{
//   readonly type : number
// }
// function createObj(obj:Type){
//   let types = 2;
//    console.log(obj.type)
//    console.log(this.types)
//  if (this.type == 1){
//    console.log("1")
//  }
// }
// let myObj= {type:1, species:'cat'}
// let types="hj";
// createObj(myObj);
// let dogs = [
//   { name : 'adele' ,rating: 12},
//   { name : 'bruce' ,rating:15},
//   { name : 'calisto' ,rating:12}
// ]
// dogs.sort((a,b) => a.rating - b.rating)
// // console.log(dogs)
//VARIABLE CAPTURING?
// function f(x){
//   let y = 20
//   return function g(z){
//     console.log(x,y)
//     return x+y+z
//   }
// }
// let number = f(10)(30)
// console.log(number);
// let value = eval('console.log(2)');
// console.log(eval);
// console.log(typeof(NaN));
// 
// setTimeout(() => {
//   console.log('start');
//   setTimeout(() => {
//     console.log('first timeout');
//   }, 1000);
//   setTimeout(() => {
//     console.log('second timeout');
//   }, 0);
//   console.log('end');
// }, 1000);
// JQUERY INSTALLED...
// let $head = $('head');
// let x:number = 0;
// let y:number = 0;
// function getCoordinates(incrementX:number,incrementY:number) :number[]{
//   x += incrementX;
//   y += incrementY;
//   return [x,y];
// }
// [x,y] = getCoordinates(2,4);
// console.log(x,y); 
