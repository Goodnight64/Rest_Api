const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//retorna todos os produtos
router.get('/', (req, res, next) => {

    mysql.getConnection((error, conn) =>{
        if (error) {return res.status(500).send({ error: error })}//tratamento de erro 
        conn.query(
            'select * from country;',
            (error, resultado, fields) => {
                if(error) {return res.status(500).send({ error: error }) }
                return res.status(200).send({response: resultado})
            }
        )
    })
});

//incere todos os produtos
router.post('/', (req, res, next) =>{

    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO country (portuguese_name, english_name, image_link, image) VALUES (?,?,?,?)',
            [   
                req.body.portuguese_name, 
                req.body.english_name, 
                req.body.image_link, 
                req.body.image
            ],

            (error, resultado, field) =>{
                conn.release();

                if(error){
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }

                res.status(201).send({
                    mensagem: 'Pais inserido com sucesso',
                })

            }
        );
    });

});

//retorna um produto especifico
router.get('/:id_country', (req, res, next) =>{

    mysql.getConnection((error, conn) =>{
        if (error) {return res.status(500).send({ error: error })}//tratamento de erro, retorna erro na syntax do mysql
        conn.query(
            'select * from country where id_country = ?;',
            [req.params.id_country],
            (error, resultado, fields) => {
                conn.release();
                if(error) {return res.status(500).send({ error: error }) }
                return res.status(200).send({response: resultado})
            }
        )
    })

})

//altera um pais
router.patch('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {return res.status(500).send({ error: error })}
        conn.query(
            `UPDATE country
               SET portuguese_name          = ?,
                   english_name             = ?,
                   image_link               = ?,
                   image                    = ?
             WHERE id_country               = ? `,
         [
            req.body.portuguese_name,
            req.body.english_name,
            req.body.image_link,
            req.body.image,
            req.body.id_country,
         ],
         (error, resultado, fields) => {
            conn.release();
            if(error) {return res.status(500).send({ error: error }) }
            return res.status(202).send({ mensagem: 'Pais alterado com Sucesso' })
         }

        );
    });
});


//apaga um pais
router.delete('/', (req, res, next) =>{
    mysql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({ error: error })}
        conn.query(
            `DELETE FROM country  WHERE id_country = ?`,
            [req.body.id_country],
            (error, resultado, fields) => {
                conn.release();
                if(error) {return res.status(500).send({ error: error }) }
                return res.status(202).send({ mensagem: 'Pais Deletado com Sucesso' })
            }

        )
    })
})



module.exports = router;