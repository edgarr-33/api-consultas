const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM consultas', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO consultas set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('receta consulta!')
        })
    })
})

//get by id


routes.get('/:id_paciente', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM consultas WHERE id_paciente = ?',(req.body,req.params.id_paciente), (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})





module.exports = routes