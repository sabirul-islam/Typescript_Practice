// //function type
// let myFunc: Function
// myFunc = ()=>{
//     console.log("hello");
    
// }
// myFunc = 5

// // Function Parameter
// const myFunc = (a:string, b:string, c?:string) => {
//     console.log(c);
//     console.log(`hello ${a} ${b}`);
// }
// myFunc('sabirul', 'islam')

// // Function Parameter with default value
// const myFunc = (a:string, b:string, c:string = 'ami') => {
//     console.log(c);
//     console.log(`hello ${a} ${b}`);
// }
// myFunc('sabirul', 'islam')

// return void
const myFunc = (a:string, b:string, c:string = 'ami'): string => {
    return a + b
}
myFunc('sabirul', 'islam')

