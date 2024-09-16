import mysql from "mysql2"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"@Twiste11",
  database:"newinv"
})