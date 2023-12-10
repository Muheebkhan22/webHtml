const student=[{
    id: 1,
    name : "Ahmad niazi",
    age: 20,
    gpa:3.4,
    address:{
        distric : "baune",
        tehsell : "banuee",
        village : "banuu city"
    },
    mark : [20,99,43,65,76,54]
},
{
    id: 2,
    name : "Syad ",
    age: 19,
    gpa:3.69,
    address:{
        distric : "peahsware",
        tehsell : "paeajwer",
        village : "peashwer city"
    },
    mark : [43,3,54,45,33,90]
},
{
    id: 3,
    name : "khan",
    age: 21,
    gpa:2.2,
    address:{
        distric : "mardan",
        tehsell : "pakistan chook",
        village : "gany city"
    },
    mark : [24,35,89,67,45,45]
}]
// for(let i=0; i<student.length;i++){
//     console.log(student[i].name)
// }
// for(let i=0; i<student.length;i++){
    // console.log(student[i].id + " " + student[i].name)
    // if(student.gpa < 3){
    //     console.log(student[i].name)
    // }
    // if(student[i].mark[0]<50){
    //     console.log(student[i].name)
    // }
//     console.log(student[i].name + " " + student[i].address.village)
// }
var sum = 0;
for(let i=0; i<student.length;i++){
    for(let j=0; j<6; j++){
        sum = sum + student[i].mark[j];
    }
    console.log(`Name ${student[i].name} total: ${sum}`)
}