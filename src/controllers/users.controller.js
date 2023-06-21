import {pool} from "../db.js";

export const getUsers = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM users")
        res.json(rows)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Something wrong happened, users not found :("
        })
    }
}
//
export const getUser = async (req, res) => {
    const {id} = req.params;
    try {
        const [rows] = await pool.query("SELECT * FROM users WHERE id=?", [id])
        if(rows.length <= 0){
            res.status(404).json({
                message: "User not found :("
            })
        }
        res.json(rows[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Something wrong happened, user not found :("
        })
    }
}
//
export const postUser = async (req, res) => {
    const {firstname, lastname, email, pass} = req.body;
    try {
        const [rows] = await pool.query("INSERT INTO users (firstname, lastname, email, pass) VALUES (?,?,?,?)", [firstname, lastname, email, pass]);
        res.send({
            id: rows.insertId,
            firstname,
            lastname,
            email,
            pass
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Something wrong happened, user not posted :("
        })
    }
}
//
export const putUser = async (req, res) => {
    const {id} = req.params;
    const {firstname, lastname, email, pass} = req.body;
    try {
        const [result] = await pool.query("UPDATE users SET firstname=?, lastname=?, email=?, pass=? WHERE id=?", [firstname, lastname, email, pass, id])
        if(result.affectedRows <= 0){
            res.status(404).json({
                message: "User not found :("
            })
        }
        const [rows] = await pool.query("SELECT * FROM users WHERE id=?", [id])
        res.json(rows[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Something wrong happened, user not updated :("
        })
    }
}
//
export const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        const [result] = await pool.query("DELETE FROM users WHERE id=?", [id])
        if(result.affectedRows <= 0){
            res.status(404).json({
                message: "User not found"
            })
        }
        res.sendStatus(204)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Something wrong happened, user not deleted :("
        })
    }
}