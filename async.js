// // const { reject } = require("async")

// // const { reject } = require("async")

// // function getOne(){
// //   return 1
// // }

// // function getTwo(){
// //   return 2
// // }

// // // below getThree is a async action. We need to deal it with async programming

// // function getThree(callback){
// //   setTimeout(()=> {
// //     callback(3) 
// //    },3000)
// // }

// // function getFour(callback){
// //   setTimeout(()=>{
// //     callback(4)
// //   },2000)
// // }

// // function getFive(callback){
// //   setTimeout(()=>{
// //     callback(5)
// //   },2000)
// // }

// // console.log(getOne())
// // console.log(getTwo())

// // // callback hell/christmas tree

// // getThree(function(data){
// //   console.log(data)
// //   getFour(function(data){
// //     console.log(data)
// //     getFive(function(data){
// //       console.log(data)
// //     })
// //   })
// // })


// // const myFunc = new Promise((resolve,reject) =>{
// //   setTimeout(()=>{
// //     resolve('hi')
// //   },2000)
// // })

// // // reject -> catch and shows err
// // // resolve -> then and show data

// // myFunc
// // .then(data => {
// //   return Promise.resolve('hello')
// // })
// // .then(data => console.log(data))
// // .catch(err => console.log(err))




// function getOne(){
//   return 1
// }

// function getTwo(){
//   return 2
// }


// // lets use promise

// function getThree(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=> {
//       resolve(3) 
//      },3000)
//   })
// }

// function getFour(){
//   return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     reject(new Error(4))
//   },2000)
//   })
// }

// // function getFive(callback){
// //   setTimeout(()=>{
// //     callback(5)
// //   },2000)
// // }

// console.log(1)
// console.log(2)

// // getThree()
// // .then(data => {
// //   console.log(data)
// //   return getFour()
// // })
// // .then(data=>console.log(data))
// // .catch(err=> console.log(err))


// //  error  handle with try and catch
// async function getAllAction(){
//   try {
//     const three = await getThree()
//     console.log(three)
//     const four = await getFour()
//     console.log(four)
//   } catch(err){
//     console.log(err)
//   }
// }

// getAllAction()
