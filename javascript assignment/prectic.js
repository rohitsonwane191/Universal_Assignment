// async function fibbonacci(n) {
//     if (n <= 1) return n;
//     return await fibbonacci(n - 1) + await fibbonacci(n - 2);
// }
// async function main() {
//     for (let i = 0; i <= 20; i++) {
//         console.log(await fibbonacci(i));
//     }
// }
// main();

// var a=[1,3,4,5,6,7];
// var c=[];
// a.forEach((value)=>{
//     const b=value+5;
// // console.log(b);
// c.push(b);
// console.log(c);
// })


// import { json } from 'body-parser';
// import express from 'express';

// const app=express();
// app.use(express,json());

// app.get("/",(req,res)=>{
//     try {
// const data=new users.findOne({email:email});
//         res.status(201).json(data)
//     } catch (error) {
//      console.log(error);   
//     }
// })

// const callme= new Promise((resolve,reject,paiind)=>{
   
//     if(true){
//         resolve("data resolve");
//     }
//     else {
//         reject("data reject");
//     }
// })
// callme.then(result=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err);
// }
// )
// import express from "express";
// const app =express();
// app.use(express.json());
// const middleware=(req,res,next)=>{
//     console.log("hello");
// }
// next();
// app.get("/",(req,res)=>{
//     const [name,email,add]=req.body;
//     const userdata=new userSchema.find({email:email});
//     res.status(201).json(userdata);
//     console.log(userdata);
// })

// var a=20;
// function data(){
//     let b=30,c=0,a=40;
//     b=100;
//     c=a+b;
//     console.log(c);
// }
// // example for let keywor

//   const  add=a;
//   console.log(add);
// data();

var i,j,max;
a=[10,40,50,80,119,110];
for(i=0;i<a.lenth;i++){
    for(j=i;j<=a[i];j++){
        max=0;
        if(a[j]<a[i]){
            max=a[j+1];
             a[j+1]=a[i];
             a[i]=max;
             console.log(a[i]);
        }
    }
}
  