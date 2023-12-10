// const mark=[3,4,44,56,10,45,34];
// for(let i = 0; i<=mark.length; i++){
//     if(mark[i]<=10){
//         console.log(mark[i]+5)
//     }
// }

// Object in JavaScript
const student = {
    id: 1,
    name: "Muheeb",
    age: 32,
    gpa: 3.9,
    address:{
        district: "Dir lower",
        Tehsel : "Balambat",
        village: "khema"
    },
    marks: [20,30,50,70,55]
}
// console.log(student.name)
// console.log(student.address.district)
// console.log(student)
// console.log(student.marks[0])
console.log(student.marks[student.marks.length-1])