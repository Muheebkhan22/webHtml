// function one(){
//     console.log('one')
// }
// function two(){
//     console.log('tow')
// }
// function three(){
//     console.log('theree')
// }
// one();
// two();
// three();



// set time out function wala
// function one(){
//     setTimeout(()=>{
//         console.log('one')
//     }, 5000)
// }
//  function two(){
//     setTimeout(()=>{
//         console.log('two')
//     },3000)
//  }
//  function three(){
//     setTimeout(()=>{
//         console.log('three')
//     }, 2000)
//  }
//  one();
//  two();
//  three();



// callback method
// function one(callback){
//     setTimeout(()=>{
//         console.log('load')
//         callback();
//     }, 5000)
// }
//  function two(callback){
//     setTimeout(()=>{
//         console.log('sort')
//         callback();
//     },3000)
//  }
//  function three(callback){
//     setTimeout(()=>{
//         console.log('print')
//         callback();
//     }, 2000)
//  }
//  one(()=>{
//     two(()=>{
//         three(()=>{
//             console.log('Done')
//         })
//     })
//  })


// promises thrad method
function one(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('load')
            resolve(1);
        }, 5000)
    })
}
function two(){
    return new Promise(()=>{
        setTimeout(()=>{
            console.log('sort')
            resolve(2);
        }, 3000)
    })
}
function three(){
    return new Promise(()=>{
        setTimeout(()=>{
            console.log('print')
            resolve(3);
        }, 2000)
    })
}
// two method are used to call the function
// no 1 = Then  and   no 2 = Async Await
// then
// one().then(()=>{
//     two().then(()=>{
//         three().then(()=>{
//             console.log('done')
//         })
//     })
// })

// await/async
async function run(){
    await one();
    await two();
    await three();
}
run();