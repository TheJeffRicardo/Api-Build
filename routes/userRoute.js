const express = require("express")
const router = express.Router()
const con = require("../lib/db_connection.js")

router.get("/", (req, res) => {
    try {
        con.query("select * from users", (err, result) => {
            if (err) throw err
            res.send(result)
        });
    }catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.get("/:id", (req, res) => {
    const id = req.params.id

    con.query(`select * from movies where id = ${id}`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        if (res.length) {
          console.log("found movies: ", res[0]);
          result(null, res[0]);
          return;
        }

        result({ kind: "not_found" }, null);
      });
})

router.create("/", (req, res) => {
    con.query("insert into movies set ?", newItems, (err, res) => {
        if (err) {
          console.log("error: ", err)
          result(err, null)
          return
        }
    
        console.log("created movies: ", { id: res.insertId, ...newItems });
        result(null, { id: res.insertId, ...newItems });
      });
})

router.put("/:id", (req, res) => {
    const id = req.params.id
    
    con.query(
        "UPDATE movies SET title = ?, description = ?, published = ? WHERE id = ?",
        [items.title, items.description, items.published, id],
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
    
          if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
          }
    
          console.log("updated tutorial: ", { id: id, ...movies });
          result(null, { id: id, ...movies });0
        }
      );
})

module.exports = router 