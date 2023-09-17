// import express from "express";
// const router = express.router();
import { Task } from "../models/task.js"; 

export const newTask = async(req, res, next) => {
    const { title, description } = req.body;
    console.log("working1")
    
    await Task.create({
        title,
        description,
        user: req.user,
    });
    console.log("working2");
    res.status(201).json({
        success: true,
        message:"task added successfully"
    })
 };