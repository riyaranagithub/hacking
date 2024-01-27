// function p1(){
//    return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Initialising hack program......")
//         resolve(200)
//     },1000)
//    })
// }
// function p2(){
//    return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Hacking Krish rana username......")
//         resolve(200)
//     },2000)
//    })
// }
// function p3(){
//    return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Username found ----> ranakrish")
//         resolve(200)
//     },3000)
//    })
// }
// function p4(){
//    return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Connecting to instagram\nKrish's instagram found......")
//         resolve(200)
//     },4000)
//    })
// }
// function p5(){
//    return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Krish Rana instagram is hacked......")
//         resolve(200)
//     },5000)
//    })
// }

// async function a(){
//     await p1()
//     await p2()
//     await p3()
//     await p4()
//     await p5()
   
// } 
// a()


let a = [
    "Initializing Hack tool...",
    "Connecting to Facebook...",
    "Connecting to server 1...",
    "Connection failed. Retrying...",
    "Connecting to server 2",
    "Connected Successfully...",
    "Username ranakrish...",
    "Trying Brute Force...",
    "200K passwords tried...",
    "Match not found",
    "Another 200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match found...",
    "Accessing Account...",
    "Hack Successful..."
]

const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(true) }, seconds * 1000)
    })
}

const showHack = async (message) => {
    await sleep(2)
    // console.log(message)
    text.innerHTML = text.innerHTML + message + "<br>"
}

(async () => {
    for (let i = 0; i < a.length; i++) {
            await showHack(a[i])
    }
})()