import {pool} from "../db.js";

export const getUsers = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM users")
        res.json(rows)
    } catch (error) {
        res.status(500).json({
            message: "Something wrong happened :("
        })
    }
}
//
export const getUser = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}
//
export const postUser = (req, res) => {
    try {
        
    } catch (error) {
        
    }
}
//
export const putUser = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}
//
export const deleteUser = (req, res) => {
    try {
        
    } catch (error) {
        
    }
}