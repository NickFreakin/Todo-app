const express=require("express");

const app=express();
app.use(express.json());

// body{
//     title:String
//     description:string
// }
import { createTodo,updateTodo } from "./types.js";

app.post("/todo", function(req,res){

})

app.get("/todo",function(req,res){

})

app.put("/completed",function(req,res){

})

app.listen(3000);