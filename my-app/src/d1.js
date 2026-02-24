// import{today} from "./d1.js"


var dt = new Date()
export var d= dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear() + " " 
export var t = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds()
console.log("Toady is " + d)
console.log("Time is " + t)